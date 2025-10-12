import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ForeignCrewEntity> {
    return this.foreignCrewsRepository.findOneBy({ id });
  }
}
