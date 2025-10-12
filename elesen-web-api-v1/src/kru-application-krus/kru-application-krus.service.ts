import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KruApplicationKruEntity> {
    return this.kruApplicationKrusRepository.findOneBy({ id });
  }
}
