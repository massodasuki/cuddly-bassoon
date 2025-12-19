import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPemohonProfilesService } from './tz-pemohon-profiles.service';
import { CreateTzPemohonProfilesDto } from './dto/create-tz-pemohon-profiles.dto';
import { UpdateTzPemohonProfilesDto } from './dto/update-tz-pemohon-profiles.dto';

@Controller('tz_pemohon_profiles')
export class TzPemohonProfilesController {
  constructor(private readonly tzpemohonprofilesservice: TzPemohonProfilesService) {}

  @Post()
  create(@Body() createTzPemohonProfilesDto: CreateTzPemohonProfilesDto) {
    return this.tzpemohonprofilesservice.create(createTzPemohonProfilesDto);
  }

  @Get()
  findAll() {
    return this.tzpemohonprofilesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpemohonprofilesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpemohonprofilesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPemohonProfilesDto: UpdateTzPemohonProfilesDto) {
    return this.tzpemohonprofilesservice.update(id, updateTzPemohonProfilesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpemohonprofilesservice.remove(id);
  }
}