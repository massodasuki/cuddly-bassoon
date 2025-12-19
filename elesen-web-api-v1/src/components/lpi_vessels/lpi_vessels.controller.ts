import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiVesselsService } from './lpi_vessels.service';
import { CreateLpiVesselsDto } from './dto/create-lpi_vessels.dto';
import { UpdateLpiVesselsDto } from './dto/update-lpi_vessels.dto';

@Controller('lpi_vessels')
export class LpiVesselsController {
  constructor(private readonly lpivesselsservice: LpiVesselsService) {}

  @Post()
  create(@Body() createLpiVesselsDto: CreateLpiVesselsDto) {
    return this.lpivesselsservice.create(createLpiVesselsDto);
  }

  @Get()
  findAll() {
    return this.lpivesselsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpivesselsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpivesselsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiVesselsDto: UpdateLpiVesselsDto) {
    return this.lpivesselsservice.update(id, updateLpiVesselsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpivesselsservice.remove(id);
  }
}