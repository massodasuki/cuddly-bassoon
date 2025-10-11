import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationV2VesselService } from './application-v2-vessel.service';
import { CreateApplicationV2VesselDto } from './dto/create-application-v2-vessel.dto';
import { UpdateApplicationV2VesselDto } from './dto/update-application-v2-vessel.dto';

@Controller('application-v2-vessel')
export class ApplicationV2VesselController {
  constructor(private readonly applicationV2VesselService: ApplicationV2VesselService) {}

  @Post()
  create(@Body() createApplicationV2VesselDto: CreateApplicationV2VesselDto) {
    return this.applicationV2VesselService.create(createApplicationV2VesselDto);
  }

  @Get()
  findAll() {
    return this.applicationV2VesselService.findAll();
  }

  @Get(':application_id/:vessel_id')
  findOne(@Param('application_id') application_id: string, @Param('vessel_id') vessel_id: string) {
    return this.applicationV2VesselService.findOne(application_id, vessel_id);
  }

  @Patch(':application_id/:vessel_id')
  update(@Param('application_id') application_id: string, @Param('vessel_id') vessel_id: string, @Body() updateApplicationV2VesselDto: UpdateApplicationV2VesselDto) {
    return this.applicationV2VesselService.update(application_id, vessel_id, updateApplicationV2VesselDto);
  }

  @Delete(':application_id/:vessel_id')
  remove(@Param('application_id') application_id: string, @Param('vessel_id') vessel_id: string) {
    return this.applicationV2VesselService.remove(application_id, vessel_id);
  }
}