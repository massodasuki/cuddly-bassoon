import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from './payments.service';
import { PaymentEntity } from './payments.entity';

@Controller('payments')
export class PaymentEntityController {
  constructor(private readonly paymentsService: PaymentService) {}

  @Get()
  findAll(): Promise<PaymentEntity[]> {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PaymentEntity> {
    return this.paymentsService.findOne(id);
  }
}
