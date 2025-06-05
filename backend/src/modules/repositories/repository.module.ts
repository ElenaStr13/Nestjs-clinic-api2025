import { Global, Module } from '@nestjs/common';
import { ClinicRepository } from './services/clinic.repository';
import { DoctorRepository } from './services/doctor.repository';

const repositories = [ClinicRepository, DoctorRepository];

@Global()
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
