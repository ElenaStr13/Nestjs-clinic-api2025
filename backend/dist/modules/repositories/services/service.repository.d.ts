import { DataSource, Repository } from 'typeorm';
import { ServiceEntity } from '../../services/entities/service.entity';
export declare class ServiceRepository extends Repository<ServiceEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    searchByName(namePart: string, order?: 'ASC' | 'DESC'): Promise<ServiceEntity[]>;
}
