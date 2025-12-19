import { Module } from '@nestjs/common';
import { SlpLuarNegaraBuktiVeselService } from './slp-luar-negara-bukti-vesel.service';
import { SlpLuarNegaraBuktiVeselController } from './slp-luar-negara-bukti-vesel.controller';
import { SlpLuarNegaraBuktiVeselEntity } from './slp-luar-negara-bukti-vesel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraBuktiVeselEntity])],
  providers: [SlpLuarNegaraBuktiVeselService],
  controllers: [SlpLuarNegaraBuktiVeselController],
  exports: [SlpLuarNegaraBuktiVeselService],
})
export class SlpLuarNegaraBuktiVeselModule {}