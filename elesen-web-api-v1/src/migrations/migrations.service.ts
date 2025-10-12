import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<MigrationEntity> {
    return this.migrationsRepository.findOneBy({ id });
  }
}
