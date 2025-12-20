import { Controller, Post, Get, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { CreateVesselDto } from './dto/create-vessel.dto';
import { UpdateVesselDto } from './dto/update-vessel.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@ApiTags('Vessels')
@Controller('api/v1/applications')
export class VesselsController {
  constructor(private readonly vesselsService: VesselsService) {}

  @Post()
  create(@Body() dto: CreateVesselDto) {
    return this.vesselsService.create(dto);
  }


  @Get('marin-minimal')
  findAllVesselMinimal(@Query() paginationQuery: PaginationQueryDto, 
    @Query('jenis') jenis?: string) {
    return this.vesselsService.findAllMinimalVessels(paginationQuery, jenis);
  }

  @Get('marin')
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.vesselsService.findAll(paginationQuery);
  }

  @Get()
  findOneUser(@Query() paginationQuery: PaginationQueryDto) {
    return this.vesselsService.findAll(paginationQuery);
  }

  @Get('marin/:id')
  findOne(@Param('id') id: string) {
    return this.vesselsService.findOne(id);
  }

  @Patch('marin/:id')
  update(@Param('id') id: string, @Body() dto: UpdateVesselDto) {
    return this.vesselsService.update(id, dto);
  }

}

