import { Controller, Get, Param } from '@nestjs/common';
import { MigrationService } from './migrations.service';
import { MigrationEntity } from './migrations.entity';

@Controller('migrations')
export class MigrationEntityController {
  constructor(private readonly migrationsService: MigrationService) {}

  @Get()
  findAll(): Promise<MigrationEntity[]> {
    return this.migrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MigrationEntity> {
    return this.migrationsService.findOne(+id);
  }
}

