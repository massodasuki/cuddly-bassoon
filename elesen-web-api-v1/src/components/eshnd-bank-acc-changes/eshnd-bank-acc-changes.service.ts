import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EshndBankAccChangesEntity } from './eshnd-bank-acc-changes.entity';
import { CreateEshndBankAccChangesDto } from './dto/create-eshnd-bank-acc-changes.dto';
import { UpdateEshndBankAccChangesDto } from './dto/update-eshnd-bank-acc-changes.dto';

@Injectable()
export class EshndBankAccChangesService {
  constructor(
    @InjectRepository(EshndBankAccChangesEntity)
    private eshndBankAccChangesRepository: Repository<EshndBankAccChangesEntity>,
  ) {}

  findAll(): Promise<EshndBankAccChangesEntity[]> {
    return this.eshndBankAccChangesRepository.find();
  }

  async findOne(id: string): Promise<EshndBankAccChangesEntity> {
    const entity = await this.eshndBankAccChangesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`EshndBankAccChangesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createEshndBankAccChangesDto: CreateEshndBankAccChangesDto): Promise<EshndBankAccChangesEntity> {
    const entity = this.eshndBankAccChangesRepository.create(createEshndBankAccChangesDto);
    return this.eshndBankAccChangesRepository.save(entity);
  }

  async update(id: string, updateEshndBankAccChangesDto: UpdateEshndBankAccChangesDto): Promise<EshndBankAccChangesEntity> {
    await this.eshndBankAccChangesRepository.update(id, updateEshndBankAccChangesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.eshndBankAccChangesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<EshndBankAccChangesEntity[]> {
    return this.eshndBankAccChangesRepository.find({
      where: { application_id: applicationId }
    });
  }
}