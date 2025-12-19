// Vessels module group for vessel-related functionality
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VesselsModule } from '../vessels/vessels.module';
import { VesselDetailsModule } from '../vessel-details/vessel-details.module';
import { VesselListingModule } from '../vessel-listing/vessel-listing.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    CommonModule,
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