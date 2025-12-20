import { Controller, Post, Get, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { VesselsApiService } from './vessels-api.service';
import { CreateVesselDto } from './dto/create-vessel-api.dto';
import { UpdateVesselDto } from './dto/update-vessel-api.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@ApiTags('Vessels')
@Controller('api/v1/applications')
export class VesselsApiController {
  constructor(private readonly vesselsApiService: VesselsApiService) {}

  @Post()
  create(@Body() dto: CreateVesselDto) {
    return this.vesselsApiService.create(dto);
  }


  @Get('vessels-minimal')
  findAllVesselMinimal(@Query() paginationQuery: PaginationQueryDto, 
    @Query('jenis') jenis?: string) {
    return this.vesselsApiService.findAllMinimalVessels(paginationQuery, jenis);
  }

  @Get('vessels')
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.vesselsApiService.findAll(paginationQuery);
  }

  @Get()
  findOneUser(@Query() paginationQuery: PaginationQueryDto) {
    return this.vesselsApiService.findAll(paginationQuery);
  }

  @Get('vessels/:id')
  findOne(@Param('id') id: string) {
    return this.vesselsApiService.findOne(id);
  }

  @Patch('vessels/:id')
  update(@Param('id') id: string, @Body() dto: UpdateVesselDto) {
    return this.vesselsApiService.update(id, dto);
  }

}

