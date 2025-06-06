import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorEntity } from './enteties/doctor.entity';
import { ClinicEntity } from '../clinics/entities/clinic.entity';
import { ServiceEntity } from '../services/entities/service.entity';
export declare class DoctorsService {
    private doctorRepo;
    private clinicRepo;
    private serviceRepo;
    constructor(doctorRepo: Repository<DoctorEntity>, clinicRepo: Repository<ClinicEntity>, serviceRepo: Repository<ServiceEntity>);
    create(dto: CreateDoctorDto): Promise<DoctorEntity>;
    findAll(firstName?: string, lastName?: string, phone?: string, email?: string, sortBy?: 'firstName' | 'lastName', sortOrder?: 'ASC' | 'DESC'): Promise<DoctorEntity[]>;
}
