// Vessels module group for vessel-related functionality
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselsModule } from '../vessels/vessels.module';
import { VesselDetailsModule } from '../vessel-details/vessel-details.module';
import { VesselListingModule } from '../vessel-listing/vessel-listing.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    VesselsModule,
    VesselDetailsModule,
    VesselListingModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    VesselsModule,
    VesselDetailsModule,
    VesselListingModule,
  ],
})
export class VesselsGroupModule {}