import { ClinicEntity } from '../../clinics/entities/clinic.entity';
import { ServiceEntity } from '../../services/entities/service.entity';
export declare class DoctorEntity {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    clinics: ClinicEntity[];
    services: ServiceEntity[];
}
