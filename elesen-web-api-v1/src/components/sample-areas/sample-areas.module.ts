import { Module } from '@nestjs/common';
import { SampleAreaService } from './sample-areas.service';
import { SampleAreaEntityController } from './sample-areas.controller';
import { SampleAreaEntity } from './sample-areas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaEntity])],
  providers: [SampleAreaService],
  controllers: [SampleAreaEntityController],
  exports: [SampleAreaService],
})
export class SampleAreaModule {}

