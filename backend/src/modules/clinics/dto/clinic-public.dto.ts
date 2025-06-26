import { ApiProperty } from '@nestjs/swagger';

class SimpleServiceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

class SimpleDoctorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ type: [SimpleServiceDto] })
  services: SimpleServiceDto[];
}

export class ClinicPublicDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [SimpleDoctorDto] })
  doctors: SimpleDoctorDto[];

  @ApiProperty({ type: [SimpleServiceDto] })
  services: SimpleServiceDto[];
}
