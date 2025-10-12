import { Module } from '@nestjs/common';
import { SampleAreaNoticeService } from './sample-area-notices.service';
import { SampleAreaNoticeEntityController } from './sample-area-notices.controller';
import { SampleAreaNoticeEntity } from './sample-area-notices.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaNoticeEntity])],
  providers: [SampleAreaNoticeService],
  controllers: [SampleAreaNoticeEntityController],
  exports: [SampleAreaNoticeService],
})
export class SampleAreaNoticeModule {}
