import { Module } from '@nestjs/common';
import { ListingPendaratanEntityervice } from './listing-pendaratan.service';
import { ListingPendaratanEntityController } from './listing-pendaratan.controller';
import { ListingPendaratanEntity } from './listing-pendaratan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ListingPendaratanEntity])],
  providers: [ListingPendaratanEntityervice],
  controllers: [ListingPendaratanEntityController],
  exports: [ListingPendaratanEntityervice],
})
export class ListingPendaratanModule {}
