import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpPt01RayuanLampiranService } from './pp_pt_01_rayuan_lampiran.service';
import { CreatePpPt01RayuanLampiranDto } from './dto/create-pp_pt_01_rayuan_lampiran.dto';
import { UpdatePpPt01RayuanLampiranDto } from './dto/update-pp_pt_01_rayuan_lampiran.dto';

@Controller('pp_pt_01_rayuan_lampiran')
export class PpPt01RayuanLampiranController {
  constructor(private readonly pppt01rayuanlampiranservice: PpPt01RayuanLampiranService) {}

  @Post()
  create(@Body() createPpPt01RayuanLampiranDto: CreatePpPt01RayuanLampiranDto) {
    return this.pppt01rayuanlampiranservice.create(createPpPt01RayuanLampiranDto);
  }

  @Get()
  findAll() {
    return this.pppt01rayuanlampiranservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pppt01rayuanlampiranservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pppt01rayuanlampiranservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpPt01RayuanLampiranDto: UpdatePpPt01RayuanLampiranDto) {
    return this.pppt01rayuanlampiranservice.update(id, updatePpPt01RayuanLampiranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pppt01rayuanlampiranservice.remove(id);
  }
}