import { Controller, Get, Param } from '@nestjs/common';
import { ReceiptService } from './receipts.service';
import { ReceiptEntity } from './receipts.entity';

@Controller('receipts')
export class ReceiptEntityController {
  constructor(private readonly receiptsService: ReceiptService) {}

  @Get()
  findAll(): Promise<ReceiptEntity[]> {
    return this.receiptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReceiptEntity> {
    return this.receiptsService.findOne(id);
  }
}

