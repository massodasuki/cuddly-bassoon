import { Controller, Get, Param } from '@nestjs/common';
import { ShellsQuotaPaymentDetailService } from './shells-quota-payment-details.service';
import { ShellsQuotaPaymentDetailEntity } from './shells-quota-payment-details.entity';

@Controller('shells-quota-payment-details')
export class ShellsQuotaPaymentDetailEntityController {
  constructor(private readonly shellsQuotaPaymentDetailsService: ShellsQuotaPaymentDetailService) {}

  @Get()
  findAll(): Promise<ShellsQuotaPaymentDetailEntity[]> {
    return this.shellsQuotaPaymentDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShellsQuotaPaymentDetailEntity> {
    return this.shellsQuotaPaymentDetailsService.findOne(id);
  }
}
