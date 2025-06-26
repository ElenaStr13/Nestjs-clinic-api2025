import { ApiProperty } from '@nestjs/swagger';
import { ServiceDto } from '../../services/dto/service.dto';

export class DoctorWithServicesDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ type: [ServiceDto] })
  services: ServiceDto[];
}
