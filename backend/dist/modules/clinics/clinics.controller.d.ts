import { ClinicsService } from './clinics.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
export declare class ClinicsController {
    private readonly clinicService;
    constructor(clinicService: ClinicsService);
    create(dto: CreateClinicDto): Promise<import("./entities/clinic.entity").ClinicEntity>;
    findAll(name?: string, sort?: 'ASC' | 'DESC'): Promise<import("./entities/clinic.entity").ClinicEntity[]>;
}
