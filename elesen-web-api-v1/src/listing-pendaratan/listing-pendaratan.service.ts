import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListingPendaratanEntity } from './listing-pendaratan.entity';

@Injectable()
export class ListingPendaratanEntityervice {
  constructor(
    @InjectRepository(ListingPendaratanEntity)
    private listingPendaratanRepository: Repository<ListingPendaratanEntity>,
  ) {}

  findAll(): Promise<ListingPendaratanEntity[]> {
    return this.listingPendaratanRepository.find();
  }

  findOne(id: string): Promise<ListingPendaratanEntity> {
    return this.listingPendaratanRepository.findOneBy({ id });
  }
}
