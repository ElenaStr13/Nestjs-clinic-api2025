import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ClinicEntity } from '../../clinics/entities/clinic.entity';

@Injectable()
export class ClinicRepository extends Repository<ClinicEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ClinicEntity, dataSource.createEntityManager());
  }

  // Додаткові методи фільтрації, пошуку
  async findByNamePart(name: string) {
    return this.createQueryBuilder('clinic')
      .where('clinic.name LIKE :name', { name: `%${name}%` })
      .getMany();
  }
}
