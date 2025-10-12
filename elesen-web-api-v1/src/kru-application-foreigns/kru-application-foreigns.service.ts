import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KruApplicationForeignEntity> {
    return this.kruApplicationForeignsRepository.findOneBy({ id });
  }
}
