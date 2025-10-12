import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ParliamentSeatEntity> {
    return this.parliamentSeatsRepository.findOneBy({ id });
  }
}
