import { Controller, Get, Param } from '@nestjs/common';
import { SalesRecordNdService } from './sales-record-nds.service';
import { SalesRecordNdEntity } from './sales-record-nds.entity';

@Controller('sales-record-nds')
export class SalesRecordNdEntityController {
  constructor(private readonly salesRecordNdsService: SalesRecordNdService) {}

  @Get()
  findAll(): Promise<SalesRecordNdEntity[]> {
    return this.salesRecordNdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SalesRecordNdEntity> {
    return this.salesRecordNdsService.findOne(id);
  }
}

