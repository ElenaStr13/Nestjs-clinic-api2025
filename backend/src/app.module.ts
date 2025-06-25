import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormModule } from './typeorm/typeorm.module';
import { ClinicsModule } from './modules/clinics/clinics.module';
import { ServicesModule } from './modules/services/services.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    //імпортую ConfigModule глобально, щоб використовувати ACCESS_TOKEN_EXPIRATION_TIME де треба
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
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
