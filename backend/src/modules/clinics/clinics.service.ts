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

  findAll(name?: string, sort?: 'ASC' | 'DESC') {
    const where = name ? { name: Like(`%${name}%`) } : {};
    return this.clinicRepo.find({
      where,
      order: sort ? { name: sort } : {},
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
