import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePengkalanDto } from './dto/create-pengkalan.dto';
import { UpdatePengkalanDto } from './dto/update-pengkalan.dto';
import { Pengkalan } from './entities/pengkalan.entity';

@Injectable()
export class PengkalanService {
  constructor(
    @InjectRepository(Pengkalan)
    private readonly pengkalanRepository: Repository<Pengkalan>,
  ) {}

  async create(createPengkalanDto: CreatePengkalanDto): Promise<Pengkalan> {
    const pengkalan = this.pengkalanRepository.create(createPengkalanDto);
    return await this.pengkalanRepository.save(pengkalan);
  }

  async findAll(): Promise<Pengkalan[]> {
    return await this.pengkalanRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<Pengkalan> {
    const pengkalan = await this.pengkalanRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!pengkalan) {
      throw new NotFoundException(`Pengkalan with ID ${id} not found`);
    }
    return pengkalan;
  }

  async update(id: string, updatePengkalanDto: UpdatePengkalanDto): Promise<Pengkalan> {
    const pengkalan = await this.pengkalanRepository.findOne({
      where: { id },
    });
    if (!pengkalan) {
      throw new NotFoundException(`Pengkalan with ID ${id} not found`);
    }
    await this.pengkalanRepository.update(id, updatePengkalanDto);
    const updatedPengkalan = await this.pengkalanRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!updatedPengkalan) {
      throw new NotFoundException(`Pengkalan with ID ${id} not found after update`);
    }
    return updatedPengkalan;
  }

  async remove(id: string): Promise<void> {
    const pengkalan = await this.pengkalanRepository.findOne({
      where: { id },
    });
    if (!pengkalan) {
      throw new NotFoundException(`Pengkalan with ID ${id} not found`);
    }
    await this.pengkalanRepository.remove(pengkalan);
  }
}