import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JettieEntity } from './jetties.entity';

@Injectable()
export class JettieService {
  constructor(
    @InjectRepository(JettieEntity)
    private jettiesRepository: Repository<JettieEntity>,
  ) {}

  findAll(): Promise<JettieEntity[]> {
    return this.jettiesRepository.find();
  }

  findOne(id: string): Promise<JettieEntity> {
    return this.jettiesRepository.findOneBy({ id });
  }
}
