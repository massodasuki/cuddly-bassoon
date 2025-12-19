import { Module } from '@nestjs/common';
import { ElaunSaraHidupNdsService } from './elaun_sara_hidup_nds.service';
import { ElaunSaraHidupNdsController } from './elaun_sara_hidup_nds.controller';
import { ElaunSaraHidupNdsEntity } from './elaun_sara_hidup_nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ElaunSaraHidupNdsEntity])],
  providers: [ElaunSaraHidupNdsService],
  controllers: [ElaunSaraHidupNdsController],
  exports: [ElaunSaraHidupNdsService],
})
export class ElaunSaraHidupNdsModule {}