import { ClinicEntity } from './entities/clinic.entity';
import { Repository } from 'typeorm';
import { CreateClinicDto } from './dto/create-clinic.dto';
export declare class ClinicsService {
    private readonly clinicRepo;
    constructor(clinicRepo: Repository<ClinicEntity>);
    create(dto: CreateClinicDto): Promise<ClinicEntity>;
    findAll(name?: string, sort?: 'ASC' | 'DESC'): Promise<ClinicEntity[]>;
}
