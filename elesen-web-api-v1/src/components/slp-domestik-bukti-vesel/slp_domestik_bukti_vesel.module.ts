import { Module } from '@nestjs/common';
import { SlpDomestikBuktiVeselService } from './slp_domestik_bukti_vesel.service';
import { SlpDomestikBuktiVeselController } from './slp_domestik_bukti_vesel.controller';
import { SlpDomestikBuktiVeselEntity } from './slp_domestik_bukti_vesel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikBuktiVeselEntity])],
  providers: [SlpDomestikBuktiVeselService],
  controllers: [SlpDomestikBuktiVeselController],
  exports: [SlpDomestikBuktiVeselService],
})
export class SlpDomestikBuktiVeselModule {}