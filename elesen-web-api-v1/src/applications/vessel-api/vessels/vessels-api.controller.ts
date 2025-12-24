import { Controller, Post, Get, Patch, Delete, Param, Body, Query, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
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


  @UseGuards(AuthGuard('jwt'))
  @Get('vessels-minimal')
  findAllVesselMinimal(@Query() paginationQuery: PaginationQueryDto,
    @Req() req: Request, @Query('jenis') jenis?: string) {
    return this.vesselsApiService.findAllMinimalVessels(paginationQuery, jenis, (req as any).token);
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

