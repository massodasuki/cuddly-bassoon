import { Module } from '@nestjs/common';
import { SlpLuarNegaraBuktiVeselService } from './slp_luar_negara_bukti_vesel.service';
import { SlpLuarNegaraBuktiVeselController } from './slp_luar_negara_bukti_vesel.controller';
import { SlpLuarNegaraBuktiVeselEntity } from './slp_luar_negara_bukti_vesel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpLuarNegaraBuktiVeselEntity])],
  providers: [SlpLuarNegaraBuktiVeselService],
  controllers: [SlpLuarNegaraBuktiVeselController],
  exports: [SlpLuarNegaraBuktiVeselService],
})
export class SlpLuarNegaraBuktiVeselModule {}