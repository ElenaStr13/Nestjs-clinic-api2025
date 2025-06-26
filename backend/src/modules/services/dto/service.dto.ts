import { ApiProperty } from '@nestjs/swagger';

export class ServiceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
