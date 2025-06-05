import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';
import { ClinicEntity } from './entities/clinic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClinicEntity])],
  providers: [ClinicsService],
  controllers: [ClinicsController],
})
export class ClinicsModule {}
