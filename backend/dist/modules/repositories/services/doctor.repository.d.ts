import { DataSource, Repository } from 'typeorm';
import { DoctorEntity } from '../../doctors/enteties/doctor.entity';
export declare class DoctorRepository extends Repository<DoctorEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    searchDoctors(query: string): Promise<DoctorEntity[]>;
}
