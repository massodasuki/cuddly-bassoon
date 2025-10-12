import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KruApplicationForeignKruEntity> {
    return this.kruApplicationForeignKrusRepository.findOneBy({ id });
  }
}
