import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './enteties/doctor.entity';
import { ClinicEntity } from '../clinics/entities/clinic.entity';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { ServiceEntity } from '../services/entities/service.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DoctorEntity, ClinicEntity, ServiceEntity]),
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
