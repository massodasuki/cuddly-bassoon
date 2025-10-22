import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationForeignKruService } from './kru-application-foreign-krus.service';
import { KruApplicationForeignKruEntity } from './kru-application-foreign-krus.entity';

@Controller('kru-application-foreign-krus')
export class KruApplicationForeignKruEntityController {
  constructor(private readonly kruApplicationForeignKrusService: KruApplicationForeignKruService) {}

  @Get()
  findAll(): Promise<KruApplicationForeignKruEntity[]> {
    return this.kruApplicationForeignKrusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationForeignKruEntity> {
    return this.kruApplicationForeignKrusService.findOne(id);
  }
}
