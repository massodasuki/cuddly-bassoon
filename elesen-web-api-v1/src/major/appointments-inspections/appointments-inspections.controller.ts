import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments-inspections.service';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';

@Controller('/api/v1/applications/appointments-inspections')
export class AppointmentsInspectionsController {
  constructor(private readonly appointmentsInspectionsService: AppointmentsInspectionsService) {}

  @Post()
  create(@Body() createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto): Promise<AppointmentsInspections> {
    return this.appointmentsInspectionsService.create(createAppointmentsInspectionsDto);
  }

  @Get()
  findAll(): Promise<AppointmentsInspections[]> {
    return this.appointmentsInspectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AppointmentsInspections> {
    return this.appointmentsInspectionsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto): Promise<AppointmentsInspections> {
    return this.appointmentsInspectionsService.update(id, updateAppointmentsInspectionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appointmentsInspectionsService.remove(id);
  }
}