import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ServiceEntity } from '../../services/entities/service.entity';

@Injectable()
export class ServiceRepository extends Repository<ServiceEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ServiceEntity, dataSource.createEntityManager());
  }

  /**
   * Пошук послуг за частиною назви + сортування по назві
   */
  async searchByName(namePart: string, order: 'ASC' | 'DESC' = 'ASC') {
    return this.createQueryBuilder('service')
      .where('LOWER(service.name) LIKE LOWER(:namePart)', {
        namePart: `%${namePart}%`,
      })
      .orderBy('service.name', order)
      .getMany();
  }
}
