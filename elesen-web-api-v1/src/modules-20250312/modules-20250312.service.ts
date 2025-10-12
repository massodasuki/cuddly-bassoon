import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modules_20250312Entity } from './modules-20250312.entity';

@Injectable()
export class Modules_20250312Entityervice {
  constructor(
    @InjectRepository(Modules_20250312Entity)
    private modules_20250312Repository: Repository<Modules_20250312Entity>,
  ) {}

  findAll(): Promise<Modules_20250312Entity[]> {
    return this.modules_20250312Repository.find();
  }

  findOne(id: string): Promise<Modules_20250312Entity> {
    return this.modules_20250312Repository.findOneBy({ id });
  }
}
