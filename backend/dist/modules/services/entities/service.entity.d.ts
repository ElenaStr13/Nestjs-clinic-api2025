import { DoctorEntity } from '../../doctors/enteties/doctor.entity';
export declare class ServiceEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    doctors: DoctorEntity[];
}
