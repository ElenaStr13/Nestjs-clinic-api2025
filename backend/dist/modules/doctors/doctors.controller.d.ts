import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
export declare class DoctorsController {
    private doctorService;
    constructor(doctorService: DoctorsService);
    create(dto: CreateDoctorDto): Promise<import("./enteties/doctor.entity").DoctorEntity>;
    findAll(firstName?: string, lastName?: string, phone?: string, email?: string, sortBy?: 'firstName' | 'lastName', sortOrder?: 'ASC' | 'DESC'): Promise<import("./enteties/doctor.entity").DoctorEntity[]>;
}
