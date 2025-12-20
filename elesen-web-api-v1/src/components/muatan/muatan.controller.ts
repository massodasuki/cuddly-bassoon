import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MuatanEntityervice } from './muatan.service';
import { MuatanEntity } from './muatan.entity';

@ApiTags('Muatan')
@Controller('muatan')
export class MuatanEntityController {
  constructor(private readonly muatanService: MuatanEntityervice) {}

  @Get()
  @ApiOperation({ summary: 'Get all muatan' })
  @ApiResponse({
    status: 200,
    description: 'List of all muatan',
    type: [MuatanEntity],
  })
  findAll(): Promise<MuatanEntity[]> {
    return this.muatanService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a muatan by ID' })
  @ApiResponse({
    status: 200,
    description: 'Muatan details',
    type: MuatanEntity,
  })
  @ApiResponse({ status: 404, description: 'Muatan not found' })
  findOne(@Param('id') id: string): Promise<MuatanEntity> {
    return this.muatanService.findOne(id);
  }
}

