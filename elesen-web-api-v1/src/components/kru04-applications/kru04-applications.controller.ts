import { Controller, Get, Param } from '@nestjs/common';
import { Kru04ApplicationService } from './kru04-applications.service';
import { Kru04ApplicationEntity } from './kru04-applications.entity';

@Controller('kru04-applications')
export class Kru04ApplicationEntityController {
  constructor(private readonly kru04ApplicationsService: Kru04ApplicationService) {}

  @Get()
  findAll(): Promise<Kru04ApplicationEntity[]> {
    return this.kru04ApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Kru04ApplicationEntity> {
    return this.kru04ApplicationsService.findOne(id);
  }
}

