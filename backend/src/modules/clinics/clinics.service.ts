import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ClinicEntity } from './entities/clinic.entity';
import { Like, Repository } from 'typeorm';
import { CreateClinicDto } from './dto/create-clinic.dto';

@Injectable()
export class ClinicsService {
  constructor(
    @InjectRepository(ClinicEntity)
    private readonly clinicRepo: Repository<ClinicEntity>,
  ) {}

  create(dto: CreateClinicDto) {
    const clinic = this.clinicRepo.create(dto);
    return this.clinicRepo.save(clinic);
  }

  async findAllAdmin(name?: string, sort?: 'ASC' | 'DESC') {
    const where = name ? { name: Like(`%${name}%`) } : {};
    return this.clinicRepo.find({
      where,
      order: sort ? { name: sort } : {},
      relations: {
        doctors: {
          services: true,
        },
      },
    });
  }

  async findAllPublic(
    name?: string,
    sort?: 'ASC' | 'DESC',
    doctorLastName?: string,
    serviceName?: string,
  ) {
    const query = this.clinicRepo
      .createQueryBuilder('clinic')
      .leftJoinAndSelect('clinic.doctors', 'doctor')
      .leftJoinAndSelect('doctor.services', 'service');

    if (name) {
      query.andWhere('clinic.name ILIKE :name', { name: `%${name}%` });
    }

    if (doctorLastName) {
      query.andWhere('LOWER(doctor.lastName) LIKE :doctorLastName', {
        doctorLastName: `%${doctorLastName.toLowerCase()}%`,
      });
    }

    if (serviceName) {
      query.andWhere('LOWER(service.name) LIKE :serviceName', {
        serviceName: `%${serviceName.toLowerCase()}%`,
      });
    }

    if (sort) {
      query.orderBy('clinic.name', sort);
    }

    const clinics = await query.getMany();

    return clinics.map((clinic) => {
      const servicesSet = new Map();

      const doctors = clinic.doctors.map((doc) => {
        const simpleServices = doc.services.map((s) => {
          servicesSet.set(s.id, { id: s.id, name: s.name });
          return { id: s.id, name: s.name };
        });

        return {
          id: doc.id,
          firstName: doc.firstName,
          lastName: doc.lastName,
          services: simpleServices,
        };
      });

      return {
        id: clinic.id,
        name: clinic.name,
        doctors,
        services: Array.from(servicesSet.values()),
      };
    });
  }

  async update(id: number, dto: Partial<CreateClinicDto>) {
    const clinic = await this.clinicRepo.findOne({ where: { id } });
    if (!clinic) throw new Error('Clinic not found');

    const updated = Object.assign(clinic, dto);
    return this.clinicRepo.save(updated);
  }

  async remove(id: number) {
    const result = await this.clinicRepo.delete(id);
    if (result.affected === 0) {
      throw new Error('Clinic not found');
    }
    return { message: 'Clinic deleted successfully' };
  }
}
