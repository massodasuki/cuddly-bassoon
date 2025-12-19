import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationAppointmentService } from './application-appointments.service';
import { CreateApplicationAppointmentDto } from './dto/create-application-appointments.dto';
import { UpdateApplicationAppointmentDto } from './dto/update-application-appointments.dto';

@Controller('application-appointments')
export class ApplicationAppointmentController {
  constructor(private readonly applicationAppointmentsService: ApplicationAppointmentService) {}

  @Post()
  create(@Body() createApplicationAppointmentDto: CreateApplicationAppointmentDto) {
    return this.applicationAppointmentsService.create(createApplicationAppointmentDto);
  }

  @Get()
  findAll() {
    return this.applicationAppointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationAppointmentsService.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationAppointmentsService.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationAppointmentDto: UpdateApplicationAppointmentDto) {
    return this.applicationAppointmentsService.update(id, updateApplicationAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationAppointmentsService.remove(id);
  }
}