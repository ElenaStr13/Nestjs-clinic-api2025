import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ServiceEntity } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity)
    private serviceRepo: Repository<ServiceEntity>,
  ) {}

  create(dto: CreateServiceDto) {
    const newService = this.serviceRepo.create(dto);
    return this.serviceRepo.save(newService);
  }

  findAll(name?: string, sort?: 'ASC' | 'DESC') {
    const where = name ? { name: Like(`%${name}%`) } : {};
    return this.serviceRepo.find({
      where,
      order: sort ? { name: sort } : {},
    });
  }

  findOne(id: number) {
    return this.serviceRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateServiceDto) {
    return this.serviceRepo.update(id, dto);
  }

  remove(id: number) {
    return this.serviceRepo.delete(id);
  }
}
