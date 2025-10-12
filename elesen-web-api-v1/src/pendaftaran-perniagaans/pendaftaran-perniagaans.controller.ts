import { Controller, Get, Param } from '@nestjs/common';
import { PendaftaranPerniagaanService } from './pendaftaran-perniagaans.service';
import { PendaftaranPerniagaanEntity } from './pendaftaran-perniagaans.entity';

@Controller('pendaftaran-perniagaans')
export class PendaftaranPerniagaanEntityController {
  constructor(private readonly pendaftaranPerniagaansService: PendaftaranPerniagaanService) {}

  @Get()
  findAll(): Promise<PendaftaranPerniagaanEntity[]> {
    return this.pendaftaranPerniagaansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PendaftaranPerniagaanEntity> {
    return this.pendaftaranPerniagaansService.findOne(id);
  }
}
