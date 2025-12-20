import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordResetEntity } from './password-resets.entity';

@Injectable()
export class PasswordResetService {
  constructor(
    @InjectRepository(PasswordResetEntity)
    private passwordResetsRepository: Repository<PasswordResetEntity>,
  ) {}

  findAll(): Promise<PasswordResetEntity[]> {
    return this.passwordResetsRepository.find();
  }

  async findOne(id: string): Promise<PasswordResetEntity> {
    const entity = await this.passwordResetsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

