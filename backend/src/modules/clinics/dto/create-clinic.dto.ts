import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDto {
  @ApiProperty()
  @IsString()
  name: string;
}
