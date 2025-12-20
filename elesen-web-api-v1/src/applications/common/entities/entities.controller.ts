import { Controller, Get, Param } from '@nestjs/common';
import { EntitieService } from './entities.service';
import { EntitieEntity } from './entities.entity';

@Controller('entities')
export class EntitieEntityController {
  constructor(private readonly entitiesService: EntitieService) {}

  @Get()
  findAll(): Promise<EntitieEntity[]> {
    return this.entitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EntitieEntity> {
    return this.entitiesService.findOne(id);
  }
}

