import { Controller, Get, Param } from '@nestjs/common';
import { ShellsQuotaPaymentService } from './shells-quota-payments.service';
import { ShellsQuotaPaymentEntity } from './shells-quota-payments.entity';

@Controller('shells-quota-payments')
export class ShellsQuotaPaymentEntityController {
  constructor(private readonly shellsQuotaPaymentsService: ShellsQuotaPaymentService) {}

  @Get()
  findAll(): Promise<ShellsQuotaPaymentEntity[]> {
    return this.shellsQuotaPaymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShellsQuotaPaymentEntity> {
    return this.shellsQuotaPaymentsService.findOne(id);
  }
}
