import { Controller, Get, Param } from '@nestjs/common';
import { SubsistencePaymentPayeeService } from './subsistence-payment-payees.service';
import { SubsistencePaymentPayeeEntity } from './subsistence-payment-payees.entity';

@Controller('subsistence-payment-payees')
export class SubsistencePaymentPayeeEntityController {
  constructor(private readonly subsistencePaymentPayeesService: SubsistencePaymentPayeeService) {}

  @Get()
  findAll(): Promise<SubsistencePaymentPayeeEntity[]> {
    return this.subsistencePaymentPayeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistencePaymentPayeeEntity> {
    return this.subsistencePaymentPayeesService.findOne(id);
  }
}

