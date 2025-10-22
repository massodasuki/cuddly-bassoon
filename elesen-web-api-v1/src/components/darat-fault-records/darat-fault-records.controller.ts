import { Controller, Get, Param } from '@nestjs/common';
import { DaratFaultRecordService } from './darat-fault-records.service';
import { DaratFaultRecordEntity } from './darat-fault-records.entity';

@Controller('darat-fault-records')
export class DaratFaultRecordEntityController {
  constructor(private readonly daratFaultRecordsService: DaratFaultRecordService) {}

  @Get()
  findAll(): Promise<DaratFaultRecordEntity[]> {
    return this.daratFaultRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratFaultRecordEntity> {
    return this.daratFaultRecordsService.findOne(id);
  }
}
