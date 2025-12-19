import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationAtfService } from './application_atf.service';
import { CreateApplicationAtfDto } from './dto/create-application_atf.dto';
import { UpdateApplicationAtfDto } from './dto/update-application_atf.dto';

@Controller('application_atf')
export class ApplicationAtfController {
  constructor(private readonly applicationatfservice: ApplicationAtfService) {}

  @Post()
  create(@Body() createApplicationAtfDto: CreateApplicationAtfDto) {
    return this.applicationatfservice.create(createApplicationAtfDto);
  }

  @Get()
  findAll() {
    return this.applicationatfservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationatfservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationatfservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationAtfDto: UpdateApplicationAtfDto) {
    return this.applicationatfservice.update(id, updateApplicationAtfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationatfservice.remove(id);
  }
}