import { Module } from '@nestjs/common';
import { SampleAreaLocationService } from './sample-area-locations.service';
import { SampleAreaLocationEntityController } from './sample-area-locations.controller';
import { SampleAreaLocationEntity } from './sample-area-locations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SampleAreaLocationEntity])],
  providers: [SampleAreaLocationService],
  controllers: [SampleAreaLocationEntityController],
  exports: [SampleAreaLocationService],
})
export class SampleAreaLocationModule {}

