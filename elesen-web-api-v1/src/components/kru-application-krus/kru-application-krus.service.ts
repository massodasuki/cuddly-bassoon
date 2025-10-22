import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationKruEntity } from './kru-application-krus.entity';

@Injectable()
export class KruApplicationKruService {
  constructor(
    @InjectRepository(KruApplicationKruEntity)
    private kruApplicationKrusRepository: Repository<KruApplicationKruEntity>,
  ) {}

  findAll(): Promise<KruApplicationKruEntity[]> {
    return this.kruApplicationKrusRepository.find();
  }

  async findOne(id: string): Promise<KruApplicationKruEntity> {
    const entity = await this.kruApplicationKrusRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
