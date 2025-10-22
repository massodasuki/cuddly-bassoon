import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ListingPendaratanEntity> {
    const entity = await this.listingPendaratanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
