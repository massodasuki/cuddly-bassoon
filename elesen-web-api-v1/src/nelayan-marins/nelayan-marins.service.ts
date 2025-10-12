import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NelayanMarinEntity } from './nelayan-marins.entity';

@Injectable()
export class NelayanMarinService {
  constructor(
    @InjectRepository(NelayanMarinEntity)
    private nelayanMarinsRepository: Repository<NelayanMarinEntity>,
  ) {}

  findAll(): Promise<NelayanMarinEntity[]> {
    return this.nelayanMarinsRepository.find();
  }

  findOne(id: string): Promise<NelayanMarinEntity> {
    return this.nelayanMarinsRepository.findOneBy({ id });
  }
}
