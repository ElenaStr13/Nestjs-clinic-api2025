import { IsString, IsArray, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: [Number], description: 'ID клінік, де працює' })
  @IsArray()
  @IsNumber({}, { each: true })
  clinics: number[];

  @ApiProperty({ type: [Number], description: 'ID послуг, які надає' })
  @IsArray()
  @IsNumber({}, { each: true })
  services: number[];
}
