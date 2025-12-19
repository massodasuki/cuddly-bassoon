import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationAppointmentsService } from './application_appointments.service';
import { CreateApplicationAppointmentsDto } from './dto/create-application_appointments.dto';
import { UpdateApplicationAppointmentsDto } from './dto/update-application_appointments.dto';

@Controller('application_appointments')
export class ApplicationAppointmentsController {
  constructor(private readonly applicationappointmentsservice: ApplicationAppointmentsService) {}

  @Post()
  create(@Body() createApplicationAppointmentsDto: CreateApplicationAppointmentsDto) {
    return this.applicationappointmentsservice.create(createApplicationAppointmentsDto);
  }

  @Get()
  findAll() {
    return this.applicationappointmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationappointmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationappointmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationAppointmentsDto: UpdateApplicationAppointmentsDto) {
    return this.applicationappointmentsservice.update(id, updateApplicationAppointmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationappointmentsservice.remove(id);
  }
}