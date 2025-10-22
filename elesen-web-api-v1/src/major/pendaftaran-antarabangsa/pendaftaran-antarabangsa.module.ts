import { Module } from '@nestjs/common';
import { PendaftaranAntarabangsaEntityervice } from './pendaftaran-antarabangsa.service';
import { PendaftaranAntarabangsaEntityController } from './pendaftaran-antarabangsa.controller';
import { PendaftaranAntarabangsaEntity } from './pendaftaran-antarabangsa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PendaftaranAntarabangsaEntity])],
  providers: [PendaftaranAntarabangsaEntityervice],
  controllers: [PendaftaranAntarabangsaEntityController],
  exports: [PendaftaranAntarabangsaEntityervice],
})
export class PendaftaranAntarabangsaModule {}
