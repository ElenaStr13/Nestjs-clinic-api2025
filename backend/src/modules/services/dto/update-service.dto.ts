import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class UpdateServiceDto extends PartialType(CreateServiceDto) {}
