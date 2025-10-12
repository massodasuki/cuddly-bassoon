import { Controller, Get, Param } from '@nestjs/common';
import { Kru01ApplicationService } from './kru01-applications.service';
import { Kru01ApplicationEntity } from './kru01-applications.entity';

@Controller('kru01-applications')
export class Kru01ApplicationEntityController {
  constructor(private readonly kru01ApplicationsService: Kru01ApplicationService) {}

  @Get()
  findAll(): Promise<Kru01ApplicationEntity[]> {
    return this.kru01ApplicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Kru01ApplicationEntity> {
    return this.kru01ApplicationsService.findOne(id);
  }
}
