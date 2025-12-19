import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bAgreeVesselNumbersService } from './ppv04b-agree-vessel-numbers.service';
import { CreatePpv04bAgreeVesselNumbersDto } from './dto/create-ppv04b-agree-vessel-numbers.dto';
import { UpdatePpv04bAgreeVesselNumbersDto } from './dto/update-ppv04b-agree-vessel-numbers.dto';

@Controller('ppv04b_agree_vessel_numbers')
export class Ppv04bAgreeVesselNumbersController {
  constructor(private readonly ppv04bagreevesselnumbersservice: Ppv04bAgreeVesselNumbersService) {}

  @Post()
  create(@Body() createPpv04bAgreeVesselNumbersDto: CreatePpv04bAgreeVesselNumbersDto) {
    return this.ppv04bagreevesselnumbersservice.create(createPpv04bAgreeVesselNumbersDto);
  }

  @Get()
  findAll() {
    return this.ppv04bagreevesselnumbersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bagreevesselnumbersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bagreevesselnumbersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bAgreeVesselNumbersDto: UpdatePpv04bAgreeVesselNumbersDto) {
    return this.ppv04bagreevesselnumbersservice.update(id, updatePpv04bAgreeVesselNumbersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bagreevesselnumbersservice.remove(id);
  }
}