import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationTypeEntity } from './kru-application-types.entity';

@Injectable()
export class KruApplicationTypeService {
  constructor(
    @InjectRepository(KruApplicationTypeEntity)
    private kruApplicationTypesRepository: Repository<KruApplicationTypeEntity>,
  ) {}

  findAll(): Promise<KruApplicationTypeEntity[]> {
    return this.kruApplicationTypesRepository.find();
  }

  findOne(id: string): Promise<KruApplicationTypeEntity> {
    return this.kruApplicationTypesRepository.findOneBy({ id });
  }
}
