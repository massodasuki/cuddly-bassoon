import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<PasswordResetEntity> {
    return this.passwordResetsRepository.findOneBy({ id });
  }
}
