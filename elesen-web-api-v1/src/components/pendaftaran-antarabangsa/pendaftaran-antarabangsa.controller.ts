import { Controller, Get, Param } from '@nestjs/common';
import { PendaftaranAntarabangsaEntityervice } from './pendaftaran-antarabangsa.service';
import { PendaftaranAntarabangsaEntity } from './pendaftaran-antarabangsa.entity';

@Controller('pendaftaran-antarabangsa')
export class PendaftaranAntarabangsaEntityController {
  constructor(private readonly pendaftaranAntarabangsaService: PendaftaranAntarabangsaEntityervice) {}

  @Get()
  findAll(): Promise<PendaftaranAntarabangsaEntity[]> {
    return this.pendaftaranAntarabangsaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PendaftaranAntarabangsaEntity> {
    return this.pendaftaranAntarabangsaService.findOne(id);
  }
}
