import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalAccessTokenEntity } from './personal-access-tokens.entity';

@Injectable()
export class PersonalAccessTokenService {
  constructor(
    @InjectRepository(PersonalAccessTokenEntity)
    private personalAccessTokensRepository: Repository<PersonalAccessTokenEntity>,
  ) {}

  findAll(): Promise<PersonalAccessTokenEntity[]> {
    return this.personalAccessTokensRepository.find();
  }

  async findOne(id: string): Promise<PersonalAccessTokenEntity> {
    const entity = await this.personalAccessTokensRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
