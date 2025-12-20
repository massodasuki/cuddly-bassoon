import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentApprovesService } from './appointment-approves.service';
import { CreateAppointmentApproveDto } from './dto/create-appointment-approve.dto';
import { UpdateAppointmentApproveDto } from './dto/update-appointment-approve.dto';

@Controller('appointment-approves')
export class AppointmentApprovesController {
  constructor(private readonly appointmentApprovesService: AppointmentApprovesService) {}

  @Post()
  create(@Body() createAppointmentApproveDto: CreateAppointmentApproveDto) {
    return this.appointmentApprovesService.create(createAppointmentApproveDto);
  }

  @Get()
  findAll() {
    return this.appointmentApprovesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentApprovesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentApproveDto: UpdateAppointmentApproveDto) {
    return this.appointmentApprovesService.update(id, updateAppointmentApproveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentApprovesService.remove(id);
  }
}
