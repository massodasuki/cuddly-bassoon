// Vessels module group for vessel-related functionality
import { Module } from '@nestjs/common';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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