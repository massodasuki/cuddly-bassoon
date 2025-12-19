import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselCompanyAssetsService } from './vessel-company-assets.service';
import { CreateVesselCompanyAssetsDto } from './dto/create-vessel-company-assets.dto';
import { UpdateVesselCompanyAssetsDto } from './dto/update-vessel-company-assets.dto';

@Controller('vessel_company_assets')
export class VesselCompanyAssetsController {
  constructor(private readonly vesselcompanyassetsservice: VesselCompanyAssetsService) {}

  @Post()
  create(@Body() createVesselCompanyAssetsDto: CreateVesselCompanyAssetsDto) {
    return this.vesselcompanyassetsservice.create(createVesselCompanyAssetsDto);
  }

  @Get()
  findAll() {
    return this.vesselcompanyassetsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselcompanyassetsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselcompanyassetsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselCompanyAssetsDto: UpdateVesselCompanyAssetsDto) {
    return this.vesselcompanyassetsservice.update(id, updateVesselCompanyAssetsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselcompanyassetsservice.remove(id);
  }
}