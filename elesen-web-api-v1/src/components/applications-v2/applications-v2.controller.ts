import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationsV2Entityervice } from './applications-v2.service';
import { CreateApplicationV2Dto } from './dto/create-application-v2.dto';
import { UpdateApplicationV2Dto } from './dto/update-application-v2.dto';

@Controller('applications-v2')
export class ApplicationsV2EntityController {
  constructor(private readonly applicationsV2Service: ApplicationsV2Entityervice) {}

  @Post()
  create(@Body() createApplicationV2Dto: CreateApplicationV2Dto) {
    return this.applicationsV2Service.create(createApplicationV2Dto);
  }

  @Get()
  findAll() {
    return this.applicationsV2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsV2Service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationV2Dto: UpdateApplicationV2Dto) {
    return this.applicationsV2Service.update(id, updateApplicationV2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsV2Service.remove(id);
  }
}