import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SampleAreaService } from './sample-areas.service';
import { SampleAreaEntity } from './sample-areas.entity';

@ApiTags('Sample Areas')
@Controller('sample-areas')
export class SampleAreaEntityController {
  constructor(private readonly sampleAreasService: SampleAreaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all sample areas' })
  @ApiResponse({
    status: 200,
    description: 'List of all sample areas',
    type: [SampleAreaEntity],
  })
  findAll(): Promise<SampleAreaEntity[]> {
    return this.sampleAreasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a sample area by ID' })
  @ApiResponse({
    status: 200,
    description: 'Sample area details',
    type: SampleAreaEntity,
  })
  @ApiResponse({ status: 404, description: 'Sample area not found' })
  findOne(@Param('id') id: string): Promise<SampleAreaEntity> {
    return this.sampleAreasService.findOne(id);
  }
}

