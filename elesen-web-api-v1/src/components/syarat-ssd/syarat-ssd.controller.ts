import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SyaratSsdService } from './syarat-ssd.service';
import { CreateSyaratSsdDto } from './dto/create-syarat-ssd.dto';
import { UpdateSyaratSsdDto } from './dto/update-syarat-ssd.dto';

@Controller('syarat_ssd')
export class SyaratSsdController {
  constructor(private readonly syaratssdservice: SyaratSsdService) {}

  @Post()
  create(@Body() createSyaratSsdDto: CreateSyaratSsdDto) {
    return this.syaratssdservice.create(createSyaratSsdDto);
  }

  @Get()
  findAll() {
    return this.syaratssdservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syaratssdservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.syaratssdservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSyaratSsdDto: UpdateSyaratSsdDto) {
    return this.syaratssdservice.update(id, updateSyaratSsdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syaratssdservice.remove(id);
  }
}