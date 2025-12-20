import { Controller, Get, Param } from '@nestjs/common';
import { SubsistenceListHqService } from './subsistence-list-hqs.service';
import { SubsistenceListHqEntity } from './subsistence-list-hqs.entity';

@Controller('subsistence-list-hqs')
export class SubsistenceListHqEntityController {
  constructor(private readonly subsistenceListHqsService: SubsistenceListHqService) {}

  @Get()
  findAll(): Promise<SubsistenceListHqEntity[]> {
    return this.subsistenceListHqsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistenceListHqEntity> {
    return this.subsistenceListHqsService.findOne(id);
  }
}

