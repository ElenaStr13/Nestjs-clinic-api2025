import { Module } from '@nestjs/common';
import { TypeormModule } from './typeorm/typeorm.module';
import { ClinicsModule } from './modules/clinics/clinics.module';
import { ServicesModule } from './modules/services/services.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeormModule,
    ClinicsModule,
    ServicesModule,
    DoctorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
