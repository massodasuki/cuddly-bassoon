import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseTransferAppsService } from './base_transfer_apps.service';
import { CreateBaseTransferAppsDto } from './dto/create-base_transfer_apps.dto';
import { UpdateBaseTransferAppsDto } from './dto/update-base_transfer_apps.dto';

@Controller('base_transfer_apps')
export class BaseTransferAppsController {
  constructor(private readonly basetransferappsservice: BaseTransferAppsService) {}

  @Post()
  create(@Body() createBaseTransferAppsDto: CreateBaseTransferAppsDto) {
    return this.basetransferappsservice.create(createBaseTransferAppsDto);
  }

  @Get()
  findAll() {
    return this.basetransferappsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basetransferappsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.basetransferappsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseTransferAppsDto: UpdateBaseTransferAppsDto) {
    return this.basetransferappsservice.update(id, updateBaseTransferAppsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basetransferappsservice.remove(id);
  }
}