import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationV2VesselService } from './application-v2-vessel.service';
import { ApplicationV2VesselController } from './application-v2-vessel.controller';
import { ApplicationV2Vessel } from './application-v2-vessel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationV2Vessel])],
  controllers: [ApplicationV2VesselController],
  providers: [ApplicationV2VesselService],
  exports: [ApplicationV2VesselService],
})
export class ApplicationV2VesselModule {}