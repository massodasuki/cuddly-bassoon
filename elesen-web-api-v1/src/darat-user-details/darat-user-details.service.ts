import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratUserDetailEntity } from './darat-user-details.entity';

@Injectable()
export class DaratUserDetailService {
  constructor(
    @InjectRepository(DaratUserDetailEntity)
    private daratUserDetailsRepository: Repository<DaratUserDetailEntity>,
  ) {}

  findAll(): Promise<DaratUserDetailEntity[]> {
    return this.daratUserDetailsRepository.find();
  }

  findOne(id: string): Promise<DaratUserDetailEntity> {
    return this.daratUserDetailsRepository.findOneBy({ id });
  }
}
