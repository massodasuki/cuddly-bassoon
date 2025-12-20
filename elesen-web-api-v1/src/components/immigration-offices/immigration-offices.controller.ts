import { Controller, Get, Param } from '@nestjs/common';
import { ImmigrationOfficeService } from './immigration-offices.service';
import { ImmigrationOfficeEntity } from './immigration-offices.entity';

@Controller('immigration-offices')
export class ImmigrationOfficeEntityController {
  constructor(private readonly immigrationOfficesService: ImmigrationOfficeService) {}

  @Get()
  findAll(): Promise<ImmigrationOfficeEntity[]> {
    return this.immigrationOfficesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ImmigrationOfficeEntity> {
    return this.immigrationOfficesService.findOne(id);
  }
}

