import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubsistenceDocEntityervice } from './subsistence-doc.service';
import { SubsistenceDocEntity } from './subsistence-doc.entity';

@ApiTags('Subsistence Doc')
@Controller('subsistence-doc')
export class SubsistenceDocEntityController {
  constructor(private readonly subsistenceDocService: SubsistenceDocEntityervice) {}

  @Get()
  @ApiOperation({ summary: 'Get all subsistence docs' })
  @ApiResponse({
    status: 200,
    description: 'List of all subsistence docs',
    type: [SubsistenceDocEntity],
  })
  findAll(): Promise<SubsistenceDocEntity[]> {
    return this.subsistenceDocService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a subsistence doc by ID' })
  @ApiResponse({
    status: 200,
    description: 'Subsistence doc details',
    type: SubsistenceDocEntity,
  })
  @ApiResponse({ status: 404, description: 'Subsistence doc not found' })
  findOne(@Param('id') id: string): Promise<SubsistenceDocEntity> {
    return this.subsistenceDocService.findOne(id);
  }
}

