import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesyuaratKickoff04aService } from './mesyuarat_kickoff_04a.service';
import { CreateMesyuaratKickoff04aDto } from './dto/create-mesyuarat_kickoff_04a.dto';
import { UpdateMesyuaratKickoff04aDto } from './dto/update-mesyuarat_kickoff_04a.dto';

@Controller('mesyuarat_kickoff_04a')
export class MesyuaratKickoff04aController {
  constructor(private readonly mesyuaratkickoff04aservice: MesyuaratKickoff04aService) {}

  @Post()
  create(@Body() createMesyuaratKickoff04aDto: CreateMesyuaratKickoff04aDto) {
    return this.mesyuaratkickoff04aservice.create(createMesyuaratKickoff04aDto);
  }

  @Get()
  findAll() {
    return this.mesyuaratkickoff04aservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesyuaratkickoff04aservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mesyuaratkickoff04aservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesyuaratKickoff04aDto: UpdateMesyuaratKickoff04aDto) {
    return this.mesyuaratkickoff04aservice.update(id, updateMesyuaratKickoff04aDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesyuaratkickoff04aservice.remove(id);
  }
}