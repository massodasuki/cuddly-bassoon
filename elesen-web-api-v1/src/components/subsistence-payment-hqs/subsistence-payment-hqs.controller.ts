import { Controller, Get, Param } from '@nestjs/common';
import { SubsistencePaymentHqService } from './subsistence-payment-hqs.service';
import { SubsistencePaymentHqEntity } from './subsistence-payment-hqs.entity';

@Controller('subsistence-payment-hqs')
export class SubsistencePaymentHqEntityController {
  constructor(private readonly subsistencePaymentHqsService: SubsistencePaymentHqService) {}

  @Get()
  findAll(): Promise<SubsistencePaymentHqEntity[]> {
    return this.subsistencePaymentHqsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistencePaymentHqEntity> {
    return this.subsistencePaymentHqsService.findOne(id);
  }
}

