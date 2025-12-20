import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImmigrationOfficeEntity } from './immigration-offices.entity';

@Injectable()
export class ImmigrationOfficeService {
  constructor(
    @InjectRepository(ImmigrationOfficeEntity)
    private immigrationOfficesRepository: Repository<ImmigrationOfficeEntity>,
  ) {}

  findAll(): Promise<ImmigrationOfficeEntity[]> {
    return this.immigrationOfficesRepository.find();
  }

  async findOne(id: string): Promise<ImmigrationOfficeEntity> {
    const entity = await this.immigrationOfficesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

