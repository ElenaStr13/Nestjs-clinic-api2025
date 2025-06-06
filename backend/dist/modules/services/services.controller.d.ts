import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(dto: CreateServiceDto): Promise<import("./entities/service.entity").ServiceEntity>;
    findAll(name?: string, sort?: 'ASC' | 'DESC'): Promise<import("./entities/service.entity").ServiceEntity[]>;
    findOne(id: string): Promise<import("./entities/service.entity").ServiceEntity | null>;
    update(id: string, dto: UpdateServiceDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
