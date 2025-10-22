import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<HebahanEntity> {
    const entity = await this.hebahansRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
