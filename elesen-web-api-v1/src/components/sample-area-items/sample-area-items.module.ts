import { Module } from '@nestjs/common';
import { SampleAreaItemService } from './sample-area-items.service';
import { SampleAreaItemEntityController } from './sample-area-items.controller';
import { SampleAreaItemEntity } from './sample-area-items.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaItemEntity])],
  providers: [SampleAreaItemService],
  controllers: [SampleAreaItemEntityController],
  exports: [SampleAreaItemService],
})
export class SampleAreaItemModule {}

