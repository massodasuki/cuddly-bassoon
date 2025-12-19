import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselEntity } from '../common/entities/vessels.entity';
import { DaratVesselEntity } from '../common/entities/darat-vessels.entity';
import { VesselListingController } from './vessel-listing.controller';
import { VesselListingService } from './vessel-listing.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VesselEntity,
      DaratVesselEntity,
    ]),
  ],
  controllers: [VesselListingController],
  providers: [VesselListingService],
  exports: [VesselListingService],
})
export class VesselListingModule {}