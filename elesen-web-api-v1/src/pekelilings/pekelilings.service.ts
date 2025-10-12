import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PekelilingEntity } from './pekelilings.entity';

@Injectable()
export class PekelilingService {
  constructor(
    @InjectRepository(PekelilingEntity)
    private pekelilingsRepository: Repository<PekelilingEntity>,
  ) {}

  findAll(): Promise<PekelilingEntity[]> {
    return this.pekelilingsRepository.find();
  }

  findOne(id: string): Promise<PekelilingEntity> {
    return this.pekelilingsRepository.findOneBy({ id });
  }
}
