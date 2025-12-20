import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationKruService } from './kru-application-krus.service';
import { KruApplicationKruEntity } from './kru-application-krus.entity';

@Controller('kru-application-krus')
export class KruApplicationKruEntityController {
  constructor(private readonly kruApplicationKrusService: KruApplicationKruService) {}

  @Get()
  findAll(): Promise<KruApplicationKruEntity[]> {
    return this.kruApplicationKrusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationKruEntity> {
    return this.kruApplicationKrusService.findOne(id);
  }
}

