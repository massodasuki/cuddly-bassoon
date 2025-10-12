import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<PersonalAccessTokenEntity> {
    return this.personalAccessTokensRepository.findOneBy({ id });
  }
}
