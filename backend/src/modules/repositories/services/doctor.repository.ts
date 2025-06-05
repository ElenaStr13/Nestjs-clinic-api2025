import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DoctorEntity } from '../doctors/doctors.entity';

@Injectable()
export class DoctorRepository extends Repository<DoctorEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(DoctorEntity, dataSource.createEntityManager());
  }

  async searchDoctors(query: string) {
    return this.createQueryBuilder('doctor')
      .where('doctor.firstName LIKE :query', { query: `%${query}%` })
      .orWhere('doctor.lastName LIKE :query', { query: `%${query}%` })
      .orWhere('doctor.phone LIKE :query', { query: `%${query}%` })
      .orWhere('doctor.email LIKE :query', { query: `%${query}%` })
      .getMany();
  }
}
