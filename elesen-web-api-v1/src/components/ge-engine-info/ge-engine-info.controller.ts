import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeEngineInfoService } from './ge-engine-info.service';
import { CreateGeEngineInfoDto } from './dto/create-ge-engine-info.dto';
import { UpdateGeEngineInfoDto } from './dto/update-ge-engine-info.dto';

@Controller('ge_engine_info')
export class GeEngineInfoController {
  constructor(private readonly geengineinfoservice: GeEngineInfoService) {}

  @Post()
  create(@Body() createGeEngineInfoDto: CreateGeEngineInfoDto) {
    return this.geengineinfoservice.create(createGeEngineInfoDto);
  }

  @Get()
  findAll() {
    return this.geengineinfoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geengineinfoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.geengineinfoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeEngineInfoDto: UpdateGeEngineInfoDto) {
    return this.geengineinfoservice.update(id, updateGeEngineInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geengineinfoservice.remove(id);
  }
}