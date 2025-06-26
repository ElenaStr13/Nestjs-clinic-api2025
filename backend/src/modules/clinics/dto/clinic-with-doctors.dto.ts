import { ApiProperty } from '@nestjs/swagger';
import { DoctorWithServicesDto } from '../../doctors/dto/doctor-with-services.dto';

export class ClinicWithDoctorsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [DoctorWithServicesDto] })
  doctors: DoctorWithServicesDto[];
}
