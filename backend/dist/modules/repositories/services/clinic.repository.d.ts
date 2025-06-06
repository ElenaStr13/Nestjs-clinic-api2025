import { DataSource, Repository } from 'typeorm';
import { ClinicEntity } from '../../clinics/entities/clinic.entity';
export declare class ClinicRepository extends Repository<ClinicEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    findByNamePart(name: string): Promise<ClinicEntity[]>;
}
