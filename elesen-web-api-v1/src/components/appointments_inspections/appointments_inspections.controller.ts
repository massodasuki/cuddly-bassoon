import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments_inspections.service';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments_inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments_inspections.dto';

@Controller('appointments_inspections')
export class AppointmentsInspectionsController {
  constructor(private readonly appointmentsinspectionsservice: AppointmentsInspectionsService) {}

  @Post()
  create(@Body() createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto) {
    return this.appointmentsinspectionsservice.create(createAppointmentsInspectionsDto);
  }

  @Get()
  findAll() {
    return this.appointmentsinspectionsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsinspectionsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.appointmentsinspectionsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto) {
    return this.appointmentsinspectionsservice.update(id, updateAppointmentsInspectionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsinspectionsservice.remove(id);
  }
}