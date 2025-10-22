import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationForeignKruEntity } from './kru-application-foreign-krus.entity';

@Injectable()
export class KruApplicationForeignKruService {
  constructor(
    @InjectRepository(KruApplicationForeignKruEntity)
    private kruApplicationForeignKrusRepository: Repository<KruApplicationForeignKruEntity>,
  ) {}

  findAll(): Promise<KruApplicationForeignKruEntity[]> {
    return this.kruApplicationForeignKrusRepository.find();
  }

  async findOne(id: string): Promise<KruApplicationForeignKruEntity> {
    const entity = await this.kruApplicationForeignKrusRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
