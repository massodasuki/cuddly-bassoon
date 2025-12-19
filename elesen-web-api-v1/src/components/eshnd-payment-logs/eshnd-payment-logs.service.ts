import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EshndPaymentLogsEntity } from './eshnd-payment-logs.entity';
import { CreateEshndPaymentLogsDto } from './dto/create-eshnd-payment-logs.dto';
import { UpdateEshndPaymentLogsDto } from './dto/update-eshnd-payment-logs.dto';

@Injectable()
export class EshndPaymentLogsService {
  constructor(
    @InjectRepository(EshndPaymentLogsEntity)
    private eshndPaymentLogsRepository: Repository<EshndPaymentLogsEntity>,
  ) {}

  findAll(): Promise<EshndPaymentLogsEntity[]> {
    return this.eshndPaymentLogsRepository.find();
  }

  async findOne(id: string): Promise<EshndPaymentLogsEntity> {
    const entity = await this.eshndPaymentLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`EshndPaymentLogsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createEshndPaymentLogsDto: CreateEshndPaymentLogsDto): Promise<EshndPaymentLogsEntity> {
    const entity = this.eshndPaymentLogsRepository.create(createEshndPaymentLogsDto);
    return this.eshndPaymentLogsRepository.save(entity);
  }

  async update(id: string, updateEshndPaymentLogsDto: UpdateEshndPaymentLogsDto): Promise<EshndPaymentLogsEntity> {
    await this.eshndPaymentLogsRepository.update(id, updateEshndPaymentLogsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.eshndPaymentLogsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<EshndPaymentLogsEntity[]> {
    return this.eshndPaymentLogsRepository.find({
      where: { application_id: applicationId }
    });
  }
}