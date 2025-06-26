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
  ApiOkResponse,
} from '@nestjs/swagger';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { ClinicWithDoctorsDto } from './dto/clinic-with-doctors.dto';
import { ClinicPublicDto } from './dto/clinic-public.dto';

@ApiTags('Clinics')
@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicService: ClinicsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateClinicDto) {
    return this.clinicService.create(dto);
  }

  @Get('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List of clinics for Admin' })
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'sort', enum: ['ASC', 'DESC'], required: false })
  @ApiOkResponse({ type: [ClinicWithDoctorsDto] })
  findAllAdmin(
    @Query('name') name?: string,
    @Query('sort') sort?: 'ASC' | 'DESC',
  ) {
    return this.clinicService.findAllAdmin(name, sort);
  }

  @ApiBearerAuth()
  @Get('public')
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'doctorLastName', required: false })
  @ApiQuery({ name: 'serviceName', required: false })
  findAllPublic(
    @Query('name') name?: string,
    @Query('sort') sort?: 'ASC' | 'DESC',
    @Query('doctorLastName') doctorLastName?: string,
    @Query('serviceName') serviceName?: string,
  ) {
    return this.clinicService.findAllPublic(
      name,
      sort,
      doctorLastName,
      serviceName,
    );
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update clinic for id' })
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateClinicDto) {
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
