import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Modules2Service } from './modules2.service';
import { CreateModules2Dto } from './dto/create-modules2.dto';
import { UpdateModules2Dto } from './dto/update-modules2.dto';

@Controller('modules2')
export class Modules2Controller {
  constructor(private readonly modules2service: Modules2Service) {}

  @Post()
  create(@Body() createModules2Dto: CreateModules2Dto) {
    return this.modules2service.create(createModules2Dto);
  }

  @Get()
  findAll() {
    return this.modules2service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modules2service.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.modules2service.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModules2Dto: UpdateModules2Dto) {
    return this.modules2service.update(id, updateModules2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modules2service.remove(id);
  }
}