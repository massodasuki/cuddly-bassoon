import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFinancialDto } from './dto/create-financial.dto';
import { UpdateFinancialDto } from './dto/update-financial.dto';
import { Financial } from './entities/financial.entity';

@Injectable()
export class FinancialService {
  constructor(
    @InjectRepository(Financial)
    private readonly financialRepository: Repository<Financial>,
  ) {}

  async create(createFinancialDto: CreateFinancialDto): Promise<Financial> {
    const financial = this.financialRepository.create(createFinancialDto);
    return await this.financialRepository.save(financial);
  }

  async findAll(): Promise<Financial[]> {
    return await this.financialRepository.find({ relations: ['user'] });
  }

  async findOne(id : string): Promise<Financial> {
    const financial = await this.financialRepository.findOne({
      where: {  id },
      relations: ['user'],
    });
    if (!financial) {
      throw new NotFoundException(`Financial with ID ${id} not found`);
    }
    return financial;
  }

  async update(id : string, updateFinancialDto: UpdateFinancialDto): Promise<Financial> {
    const financial = await this.financialRepository.findOne({
      where: {  id },
    });
    if (!financial) {
      throw new NotFoundException(`Financial with ID ${id} not found`);
    }
    await this.financialRepository.update(id, updateFinancialDto);
    const updatedFinancial = await this.financialRepository.findOne({
      where: {  id },
      relations: ['user'],
    });
    if (!updatedFinancial) {
      throw new NotFoundException(`Financial with ID ${id} not found after update`);
    }
    return updatedFinancial;
  }

  async remove(id : string): Promise<void> {
    const financial = await this.financialRepository.findOne({
      where: {  id },
    });
    if (!financial) {
      throw new NotFoundException(`Financial with ID ${id} not found`);
    }
    await this.financialRepository.remove(financial);
  }
}
