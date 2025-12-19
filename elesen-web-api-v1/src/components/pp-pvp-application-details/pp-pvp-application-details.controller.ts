import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpPvpApplicationDetailsService } from './pp-pvp-application-details.service';
import { CreatePpPvpApplicationDetailsDto } from './dto/create-pp-pvp-application-details.dto';
import { UpdatePpPvpApplicationDetailsDto } from './dto/update-pp-pvp-application-details.dto';

@Controller('pp_pvp_application_details')
export class PpPvpApplicationDetailsController {
  constructor(private readonly pppvpapplicationdetailsservice: PpPvpApplicationDetailsService) {}

  @Post()
  create(@Body() createPpPvpApplicationDetailsDto: CreatePpPvpApplicationDetailsDto) {
    return this.pppvpapplicationdetailsservice.create(createPpPvpApplicationDetailsDto);
  }

  @Get()
  findAll() {
    return this.pppvpapplicationdetailsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pppvpapplicationdetailsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pppvpapplicationdetailsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpPvpApplicationDetailsDto: UpdatePpPvpApplicationDetailsDto) {
    return this.pppvpapplicationdetailsservice.update(id, updatePpPvpApplicationDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pppvpapplicationdetailsservice.remove(id);
  }
}