import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ClinicEntity } from '../../clinics/entities/clinic.entity';
import { ServiceEntity } from '../../services/entities/service.entity';

@Entity('doctors')
export class DoctorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @ManyToMany(() => ClinicEntity, (clinic) => clinic.doctors)
  @JoinTable()
  clinics: ClinicEntity[];

  @ManyToMany(() => ServiceEntity, (service) => service.doctors)
  @JoinTable()
  services: ServiceEntity[];
}
