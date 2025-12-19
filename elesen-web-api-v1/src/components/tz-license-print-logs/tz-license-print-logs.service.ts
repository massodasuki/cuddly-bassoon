import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzLicensePrintLogsEntity } from './tz-license-print-logs.entity';
import { CreateTzLicensePrintLogsDto } from './dto/create-tz-license-print-logs.dto';
import { UpdateTzLicensePrintLogsDto } from './dto/update-tz-license-print-logs.dto';

@Injectable()
export class TzLicensePrintLogsService {
  constructor(
    @InjectRepository(TzLicensePrintLogsEntity)
    private tzLicensePrintLogsRepository: Repository<TzLicensePrintLogsEntity>,
  ) {}

  findAll(): Promise<TzLicensePrintLogsEntity[]> {
    return this.tzLicensePrintLogsRepository.find();
  }

  async findOne(id: string): Promise<TzLicensePrintLogsEntity> {
    const entity = await this.tzLicensePrintLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzLicensePrintLogsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzLicensePrintLogsDto: CreateTzLicensePrintLogsDto): Promise<TzLicensePrintLogsEntity> {
    const entity = this.tzLicensePrintLogsRepository.create(createTzLicensePrintLogsDto);
    return this.tzLicensePrintLogsRepository.save(entity);
  }

  async update(id: string, updateTzLicensePrintLogsDto: UpdateTzLicensePrintLogsDto): Promise<TzLicensePrintLogsEntity> {
    await this.tzLicensePrintLogsRepository.update(id, updateTzLicensePrintLogsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzLicensePrintLogsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzLicensePrintLogsEntity[]> {
    return this.tzLicensePrintLogsRepository.find({
      where: { application_id: applicationId }
    });
  }
}