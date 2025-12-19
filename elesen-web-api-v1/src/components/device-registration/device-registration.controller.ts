import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceRegistrationService } from './device-registration.service';
import { CreateDeviceRegistrationDto } from './dto/create-device-registration.dto';
import { UpdateDeviceRegistrationDto } from './dto/update-device-registration.dto';

@Controller('device_registration')
export class DeviceRegistrationController {
  constructor(private readonly deviceregistrationservice: DeviceRegistrationService) {}

  @Post()
  create(@Body() createDeviceRegistrationDto: CreateDeviceRegistrationDto) {
    return this.deviceregistrationservice.create(createDeviceRegistrationDto);
  }

  @Get()
  findAll() {
    return this.deviceregistrationservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceregistrationservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.deviceregistrationservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceRegistrationDto: UpdateDeviceRegistrationDto) {
    return this.deviceregistrationservice.update(id, updateDeviceRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceregistrationservice.remove(id);
  }
}