import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { DoctorEntity } from '../../doctors/enteties/doctor.entity';

@Entity('clinics')
export class ClinicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => DoctorEntity, (doctor) => doctor.clinics)
  doctors: DoctorEntity[];
}
