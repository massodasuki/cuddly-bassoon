import { Controller, Get, Param } from '@nestjs/common';
import { SubsistencePaymentStateService } from './subsistence-payment-states.service';
import { SubsistencePaymentStateEntity } from './subsistence-payment-states.entity';

@Controller('subsistence-payment-states')
export class SubsistencePaymentStateEntityController {
  constructor(private readonly subsistencePaymentStatesService: SubsistencePaymentStateService) {}

  @Get()
  findAll(): Promise<SubsistencePaymentStateEntity[]> {
    return this.subsistencePaymentStatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistencePaymentStateEntity> {
    return this.subsistencePaymentStatesService.findOne(id);
  }
}

