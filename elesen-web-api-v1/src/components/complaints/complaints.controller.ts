import { Controller, Get, Param } from '@nestjs/common';
import { ComplaintService } from './complaints.service';
import { ComplaintEntity } from './complaints.entity';

@Controller('complaints')
export class ComplaintEntityController {
  constructor(private readonly complaintsService: ComplaintService) {}

  @Get()
  findAll(): Promise<ComplaintEntity[]> {
    return this.complaintsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ComplaintEntity> {
    return this.complaintsService.findOne(id);
  }
}

