import { Module } from '@nestjs/common';
import { ElaunSaraHidupNdsService } from './elaun-sara-hidup-nds.service';
import { ElaunSaraHidupNdsController } from './elaun-sara-hidup-nds.controller';
import { ElaunSaraHidupNdsEntity } from './elaun-sara-hidup-nds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ElaunSaraHidupNdsEntity])],
  providers: [ElaunSaraHidupNdsService],
  controllers: [ElaunSaraHidupNdsController],
  exports: [ElaunSaraHidupNdsService],
})
export class ElaunSaraHidupNdsModule {}