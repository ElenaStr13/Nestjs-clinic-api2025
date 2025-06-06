import { Repository } from 'typeorm';
import { ServiceEntity } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private serviceRepo;
    constructor(serviceRepo: Repository<ServiceEntity>);
    create(dto: CreateServiceDto): Promise<ServiceEntity>;
    findAll(name?: string, sort?: 'ASC' | 'DESC'): Promise<ServiceEntity[]>;
    findOne(id: number): Promise<ServiceEntity | null>;
    update(id: number, dto: UpdateServiceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
