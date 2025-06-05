import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../decorators/roles.decorator';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private doctorService: DoctorsService) {}

  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  create(@Body() dto: CreateDoctorDto) {
    return this.doctorService.create(dto);
  }

  @ApiBearerAuth()
  @Get()
  @ApiQuery({ name: 'firstName', required: false })
  @ApiQuery({ name: 'lastName', required: false })
  @ApiQuery({ name: 'phone', required: false })
  @ApiQuery({ name: 'email', required: false })
  @ApiQuery({
    name: 'sortBy',
    enum: ['firstName', 'lastName'],
    required: false,
  })
  @ApiQuery({ name: 'sortOrder', enum: ['ASC', 'DESC'], required: false })
  findAll(
    @Query('firstName') firstName?: string,
    @Query('lastName') lastName?: string,
    @Query('phone') phone?: string,
    @Query('email') email?: string,
    @Query('sortBy') sortBy?: 'firstName' | 'lastName',
    @Query('sortOrder') sortOrder?: 'ASC' | 'DESC',
  ) {
    return this.doctorService.findAll(
      firstName,
      lastName,
      phone,
      email,
      sortBy,
      sortOrder,
    );
  }
}
