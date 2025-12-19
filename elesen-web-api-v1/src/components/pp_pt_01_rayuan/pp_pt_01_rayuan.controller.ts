import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpPt01RayuanService } from './pp_pt_01_rayuan.service';
import { CreatePpPt01RayuanDto } from './dto/create-pp_pt_01_rayuan.dto';
import { UpdatePpPt01RayuanDto } from './dto/update-pp_pt_01_rayuan.dto';

@Controller('pp_pt_01_rayuan')
export class PpPt01RayuanController {
  constructor(private readonly pppt01rayuanservice: PpPt01RayuanService) {}

  @Post()
  create(@Body() createPpPt01RayuanDto: CreatePpPt01RayuanDto) {
    return this.pppt01rayuanservice.create(createPpPt01RayuanDto);
  }

  @Get()
  findAll() {
    return this.pppt01rayuanservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pppt01rayuanservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pppt01rayuanservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpPt01RayuanDto: UpdatePpPt01RayuanDto) {
    return this.pppt01rayuanservice.update(id, updatePpPt01RayuanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pppt01rayuanservice.remove(id);
  }
}