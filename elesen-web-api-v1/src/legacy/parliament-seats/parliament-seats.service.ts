import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParliamentSeatEntity } from './parliament-seats.entity';

@Injectable()
export class ParliamentSeatService {
  constructor(
    @InjectRepository(ParliamentSeatEntity)
    private parliamentSeatsRepository: Repository<ParliamentSeatEntity>,
  ) {}

  findAll(): Promise<ParliamentSeatEntity[]> {
    return this.parliamentSeatsRepository.find();
  }

  async findOne(id: string): Promise<ParliamentSeatEntity> {
    const entity = await this.parliamentSeatsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

