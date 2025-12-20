import { Controller, Get, Param } from '@nestjs/common';
import { PekelilingService } from './pekelilings.service';
import { PekelilingEntity } from './pekelilings.entity';

@Controller('pekelilings')
export class PekelilingEntityController {
  constructor(private readonly pekelilingsService: PekelilingService) {}

  @Get()
  findAll(): Promise<PekelilingEntity[]> {
    return this.pekelilingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PekelilingEntity> {
    return this.pekelilingsService.findOne(id);
  }
}

