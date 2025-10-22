import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationEntity } from './kru-applications.entity';

@Injectable()
export class KruApplicationService {
  constructor(
    @InjectRepository(KruApplicationEntity)
    private kruApplicationsRepository: Repository<KruApplicationEntity>,
  ) {}

  findAll(): Promise<KruApplicationEntity[]> {
    return this.kruApplicationsRepository.find();
  }

  async findOne(id: string): Promise<KruApplicationEntity> {
    const entity = await this.kruApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
