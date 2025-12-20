import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationForeignService } from './kru-application-foreigns.service';
import { KruApplicationForeignEntity } from './kru-application-foreigns.entity';

@Controller('kru-application-foreigns')
export class KruApplicationForeignEntityController {
  constructor(private readonly kruApplicationForeignsService: KruApplicationForeignService) {}

  @Get()
  findAll(): Promise<KruApplicationForeignEntity[]> {
    return this.kruApplicationForeignsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationForeignEntity> {
    return this.kruApplicationForeignsService.findOne(id);
  }
}

