import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ImmigrationOfficeEntity> {
    return this.immigrationOfficesRepository.findOneBy({ id });
  }
}
