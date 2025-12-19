import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationPinService } from './application-pins.service';
import { CreateApplicationPinDto } from './dto/create-application-pins.dto';
import { UpdateApplicationPinDto } from './dto/update-application-pins.dto';

@Controller('application-pins')
export class ApplicationPinController {
  constructor(private readonly applicationPinsService: ApplicationPinService) {}

  @Post()
  create(@Body() createApplicationPinDto: CreateApplicationPinDto) {
    return this.applicationPinsService.create(createApplicationPinDto);
  }

  @Get()
  findAll() {
    return this.applicationPinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationPinsService.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationPinsService.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationPinDto: UpdateApplicationPinDto) {
    return this.applicationPinsService.update(id, updateApplicationPinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationPinsService.remove(id);
  }
}