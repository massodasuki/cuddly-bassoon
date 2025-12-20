import { Controller, Get, Param } from '@nestjs/common';
import { SubsistencePaymentService } from './subsistence-payments.service';
import { SubsistencePaymentEntity } from './subsistence-payments.entity';

@Controller('subsistence-payments')
export class SubsistencePaymentEntityController {
  constructor(private readonly subsistencePaymentsService: SubsistencePaymentService) {}

  @Get()
  findAll(): Promise<SubsistencePaymentEntity[]> {
    return this.subsistencePaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SubsistencePaymentEntity> {
    return this.subsistencePaymentsService.findOne(id);
  }
}

