import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Query,
  UseGuards,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import {
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiOperation,
} from '@nestjs/swagger';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Clinics')
@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicService: ClinicsService) {}

  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateClinicDto) {
    return this.clinicService.create(dto);
  }

  @ApiBearerAuth()
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'sort', enum: ['ASC', 'DESC'], required: false })
  findAll(@Query('name') name?: string, @Query('sort') sort?: 'ASC' | 'DESC') {
    return this.clinicService.findAll(name, sort);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update clinic for id' })
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<CreateClinicDto>,
  ) {
    return this.clinicService.update(id, dto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Remove clinic for id' })
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clinicService.remove(id);
  }
}
