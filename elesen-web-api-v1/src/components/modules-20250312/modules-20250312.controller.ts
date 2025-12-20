import { Controller, Get, Param } from '@nestjs/common';
import { Modules_20250312Entityervice } from './modules-20250312.service';
import { Modules_20250312Entity } from './modules-20250312.entity';

@Controller('modules-20250312')
export class Modules_20250312EntityController {
  constructor(private readonly modules_20250312Service: Modules_20250312Entityervice) {}

  @Get()
  findAll(): Promise<Modules_20250312Entity[]> {
    return this.modules_20250312Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Modules_20250312Entity> {
    return this.modules_20250312Service.findOne(id);
  }
}

