import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../../decorators/roles.decorator';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private doctorService: DoctorsService) {}

  @UseGuards(RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Post()
  @ApiOperation({ summary: 'Create doctor' })
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

  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({ summary: 'Update doctor for id' })
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateDoctorDto) {
    return this.doctorService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete doctor for id' })
  @Delete(':id')
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.doctorService.delete(id);
  }
}
