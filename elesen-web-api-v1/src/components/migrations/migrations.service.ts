import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MigrationEntity } from './migrations.entity';

@Injectable()
export class MigrationService {
  constructor(
    @InjectRepository(MigrationEntity)
    private migrationsRepository: Repository<MigrationEntity>,
  ) {}

  findAll(): Promise<MigrationEntity[]> {
    return this.migrationsRepository.find();
  }

  async findOne(id: number): Promise<MigrationEntity> {
    const entity = await this.migrationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Migration with id ${id} not found`);
    }
    return entity;
  }
}

