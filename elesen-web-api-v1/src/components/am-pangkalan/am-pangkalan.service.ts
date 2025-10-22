import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmPangkalan } from './am-pangkalan.entity';
import { CreateAmPangkalanDto } from './dto/create-am-pangkalan.dto';
import { UpdateAmPangkalanDto } from './dto/update-am-pangkalan.dto';

@Injectable()
export class AmPangkalanService {
  constructor(
    @InjectRepository(AmPangkalan)
    private amPangkalanRepository: Repository<AmPangkalan>,
  ) {}

  findAll(): Promise<AmPangkalan[]> {
    return this.amPangkalanRepository.find();
  }

  async findOne(id: number): Promise<AmPangkalan> {
    const amPangkalan = await this.amPangkalanRepository.findOneBy({ id });
    if (!amPangkalan) {
      throw new Error('AmPangkalan not found');
    }
    return amPangkalan;
  }

  async create(createAmPangkalanDto: CreateAmPangkalanDto): Promise<AmPangkalan> {
    const amPangkalan = this.amPangkalanRepository.create(createAmPangkalanDto);
    return this.amPangkalanRepository.save(amPangkalan);
  }

  async update(id: number, updateAmPangkalanDto: UpdateAmPangkalanDto): Promise<AmPangkalan> {
    await this.amPangkalanRepository.update(id, updateAmPangkalanDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.amPangkalanRepository.delete(id);
  }
}