import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingDeclarationEntity } from './landing-declarations.entity';

@Injectable()
export class LandingDeclarationService {
  constructor(
    @InjectRepository(LandingDeclarationEntity)
    private landingDeclarationsRepository: Repository<LandingDeclarationEntity>,
  ) {}

  findAll(): Promise<LandingDeclarationEntity[]> {
    return this.landingDeclarationsRepository.find();
  }

  async findOne(id: string): Promise<LandingDeclarationEntity> {
    const entity = await this.landingDeclarationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
