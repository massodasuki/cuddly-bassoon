import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HebahanEntity } from './hebahans.entity';

@Injectable()
export class HebahanService {
  constructor(
    @InjectRepository(HebahanEntity)
    private hebahansRepository: Repository<HebahanEntity>,
  ) {}

  findAll(): Promise<HebahanEntity[]> {
    return this.hebahansRepository.find();
  }

  findOne(id: string): Promise<HebahanEntity> {
    return this.hebahansRepository.findOneBy({ id });
  }
}
