import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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