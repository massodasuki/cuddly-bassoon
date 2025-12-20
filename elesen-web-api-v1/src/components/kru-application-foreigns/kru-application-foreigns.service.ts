import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationForeignEntity } from './kru-application-foreigns.entity';

@Injectable()
export class KruApplicationForeignService {
  constructor(
    @InjectRepository(KruApplicationForeignEntity)
    private kruApplicationForeignsRepository: Repository<KruApplicationForeignEntity>,
  ) {}

  findAll(): Promise<KruApplicationForeignEntity[]> {
    return this.kruApplicationForeignsRepository.find();
  }

  async findOne(id: string): Promise<KruApplicationForeignEntity> {
    const entity = await this.kruApplicationForeignsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

