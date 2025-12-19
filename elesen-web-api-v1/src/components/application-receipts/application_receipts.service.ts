import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationReceiptsEntity } from './application_receipts.entity';
import { CreateApplicationReceiptsDto } from './dto/create-application_receipts.dto';
import { UpdateApplicationReceiptsDto } from './dto/update-application_receipts.dto';

@Injectable()
export class ApplicationReceiptsService {
  constructor(
    @InjectRepository(ApplicationReceiptsEntity)
    private applicationReceiptsRepository: Repository<ApplicationReceiptsEntity>,
  ) {}

  findAll(): Promise<ApplicationReceiptsEntity[]> {
    return this.applicationReceiptsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationReceiptsEntity> {
    const entity = await this.applicationReceiptsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationReceiptsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationReceiptsDto: CreateApplicationReceiptsDto): Promise<ApplicationReceiptsEntity> {
    const entity = this.applicationReceiptsRepository.create(createApplicationReceiptsDto);
    return this.applicationReceiptsRepository.save(entity);
  }

  async update(id: string, updateApplicationReceiptsDto: UpdateApplicationReceiptsDto): Promise<ApplicationReceiptsEntity> {
    await this.applicationReceiptsRepository.update(id, updateApplicationReceiptsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationReceiptsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationReceiptsEntity[]> {
    return this.applicationReceiptsRepository.find({
      where: { application_id: applicationId }
    });
  }
}