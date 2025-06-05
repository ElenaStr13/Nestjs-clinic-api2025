import { IsString } from 'class-validator';

export class CreateClinicDto {
  @IsString()
  name: string;
}
