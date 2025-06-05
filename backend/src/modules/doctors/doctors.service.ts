import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindOptionsWhere, Repository, In, Like } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorEntity } from './enteties/doctor.entity';
import { ClinicEntity } from '../clinics/entities/clinic.entity';
import { ServiceEntity } from '../services/entities/service.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepo: Repository<DoctorEntity>,
    @InjectRepository(ClinicEntity)
    private clinicRepo: Repository<ClinicEntity>,
    @InjectRepository(ServiceEntity)
    private serviceRepo: Repository<ServiceEntity>,
  ) {}

  async create(dto: CreateDoctorDto) {
    const clinics = await this.clinicRepo.find({
      where: { id: In(dto.clinics) },
    });
    const services = await this.serviceRepo.find({
      where: { id: In(dto.services) },
    });

    const doctor = this.doctorRepo.create({
      ...dto,
      clinics,
      services,
    });

    return this.doctorRepo.save(doctor);
  }

  findAll(
    firstName?: string,
    lastName?: string,
    phone?: string,
    email?: string,
    sortBy?: 'firstName' | 'lastName',
    sortOrder?: 'ASC' | 'DESC',
  ) {
    const where: FindOptionsWhere<DoctorEntity> = {};

    if (firstName) where.firstName = Like(`%${firstName}%`);
    if (lastName) where.lastName = Like(`%${lastName}%`);
    if (phone) where.phone = Like(`%${phone}%`);
    if (email) where.email = Like(`%${email}%`);

    return this.doctorRepo.find({
      where,
      order: sortBy ? { [sortBy]: sortOrder || 'ASC' } : {},
      relations: ['clinics', 'services'],
    });
  }
}
