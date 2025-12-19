import { Module } from '@nestjs/common';
import { SlpDomestikBuktiVeselService } from './slp-domestik-bukti-vesel.service';
import { SlpDomestikBuktiVeselController } from './slp-domestik-bukti-vesel.controller';
import { SlpDomestikBuktiVeselEntity } from './slp-domestik-bukti-vesel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SlpDomestikBuktiVeselEntity])],
  providers: [SlpDomestikBuktiVeselService],
  controllers: [SlpDomestikBuktiVeselController],
  exports: [SlpDomestikBuktiVeselService],
})
export class SlpDomestikBuktiVeselModule {}