import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import { Doctor } from '../doctors/doctor.entity';

@Entity('clinics')
export class Clinic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @ManyToMany(() => Doctor, (doctor) => doctor.clinics)
  // doctors: Doctor[];
}
