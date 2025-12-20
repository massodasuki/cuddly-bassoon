import { Controller, Get, Param } from '@nestjs/common';
import { SpecieService } from './species.service';
import { SpecieEntity } from './species.entity';

@Controller('species')
export class SpecieEntityController {
  constructor(private readonly speciesService: SpecieService) {}

  @Get()
  findAll(): Promise<SpecieEntity[]> {
    return this.speciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SpecieEntity> {
    return this.speciesService.findOne(id);
  }
}

