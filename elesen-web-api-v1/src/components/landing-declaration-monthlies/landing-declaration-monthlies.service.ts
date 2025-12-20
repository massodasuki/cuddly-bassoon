import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingDeclarationMonthlieEntity } from './landing-declaration-monthlies.entity';

@Injectable()
export class LandingDeclarationMonthlieService {
  constructor(
    @InjectRepository(LandingDeclarationMonthlieEntity)
    private landingDeclarationMonthliesRepository: Repository<LandingDeclarationMonthlieEntity>,
  ) {}

  findAll(): Promise<LandingDeclarationMonthlieEntity[]> {
    return this.landingDeclarationMonthliesRepository.find();
  }

  async findOne(id: string): Promise<LandingDeclarationMonthlieEntity> {
    const entity = await this.landingDeclarationMonthliesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

