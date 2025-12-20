import { Controller, Get, Param } from '@nestjs/common';
import { ListingPendaratanEntityervice } from './listing-pendaratan.service';
import { ListingPendaratanEntity } from './listing-pendaratan.entity';

@Controller('listing-pendaratan')
export class ListingPendaratanEntityController {
  constructor(private readonly listingPendaratanService: ListingPendaratanEntityervice) {}

  @Get()
  findAll(): Promise<ListingPendaratanEntity[]> {
    return this.listingPendaratanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ListingPendaratanEntity> {
    return this.listingPendaratanService.findOne(id);
  }
}

