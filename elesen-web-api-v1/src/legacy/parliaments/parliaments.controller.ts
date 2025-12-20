import { Controller, Get, Param } from '@nestjs/common';
import { ParliamentService } from './parliaments.service';
import { ParliamentEntity } from './parliaments.entity';

@Controller('parliaments')
export class ParliamentEntityController {
  constructor(private readonly parliamentsService: ParliamentService) {}

  @Get()
  findAll(): Promise<ParliamentEntity[]> {
    return this.parliamentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ParliamentEntity> {
    return this.parliamentsService.findOne(id);
  }
}

