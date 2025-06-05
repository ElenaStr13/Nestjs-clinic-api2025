import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { DoctorEntity } from '../../doctors/enteties/doctor.entity';

@Entity('services')
export class ServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => DoctorEntity, (doctor) => doctor.services)
  doctors: DoctorEntity[];
}
