import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<LandingDeclarationMonthlieEntity> {
    return this.landingDeclarationMonthliesRepository.findOneBy({ id });
  }
}
