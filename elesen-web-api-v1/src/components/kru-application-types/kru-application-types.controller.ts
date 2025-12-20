import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationTypeService } from './kru-application-types.service';
import { KruApplicationTypeEntity } from './kru-application-types.entity';

@Controller('kru-application-types')
export class KruApplicationTypeEntityController {
  constructor(private readonly kruApplicationTypesService: KruApplicationTypeService) {}

  @Get()
  findAll(): Promise<KruApplicationTypeEntity[]> {
    return this.kruApplicationTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationTypeEntity> {
    return this.kruApplicationTypesService.findOne(id);
  }
}

