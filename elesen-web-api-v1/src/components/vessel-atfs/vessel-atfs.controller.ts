import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselAtfsService } from './vessel-atfs.service';
import { CreateVesselAtfsDto } from './dto/create-vessel-atfs.dto';
import { UpdateVesselAtfsDto } from './dto/update-vessel-atfs.dto';

@Controller('vessel_atfs')
export class VesselAtfsController {
  constructor(private readonly vesselatfsservice: VesselAtfsService) {}

  @Post()
  create(@Body() createVesselAtfsDto: CreateVesselAtfsDto) {
    return this.vesselatfsservice.create(createVesselAtfsDto);
  }

  @Get()
  findAll() {
    return this.vesselatfsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselatfsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselatfsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselAtfsDto: UpdateVesselAtfsDto) {
    return this.vesselatfsservice.update(id, updateVesselAtfsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselatfsservice.remove(id);
  }
}