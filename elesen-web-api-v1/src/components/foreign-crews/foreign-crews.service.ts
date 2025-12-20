import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForeignCrewEntity } from './foreign-crews.entity';

@Injectable()
export class ForeignCrewService {
  constructor(
    @InjectRepository(ForeignCrewEntity)
    private foreignCrewsRepository: Repository<ForeignCrewEntity>,
  ) {}

  findAll(): Promise<ForeignCrewEntity[]> {
    return this.foreignCrewsRepository.find();
  }

  async findOne(id: string): Promise<ForeignCrewEntity> {
    const entity = await this.foreignCrewsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

