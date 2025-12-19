import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationTpuReceiptsEntity } from './application_tpu_receipts.entity';
import { CreateApplicationTpuReceiptsDto } from './dto/create-application_tpu_receipts.dto';
import { UpdateApplicationTpuReceiptsDto } from './dto/update-application_tpu_receipts.dto';

@Injectable()
export class ApplicationTpuReceiptsService {
  constructor(
    @InjectRepository(ApplicationTpuReceiptsEntity)
    private applicationTpuReceiptsRepository: Repository<ApplicationTpuReceiptsEntity>,
  ) {}

  findAll(): Promise<ApplicationTpuReceiptsEntity[]> {
    return this.applicationTpuReceiptsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationTpuReceiptsEntity> {
    const entity = await this.applicationTpuReceiptsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationTpuReceiptsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationTpuReceiptsDto: CreateApplicationTpuReceiptsDto): Promise<ApplicationTpuReceiptsEntity> {
    const entity = this.applicationTpuReceiptsRepository.create(createApplicationTpuReceiptsDto);
    return this.applicationTpuReceiptsRepository.save(entity);
  }

  async update(id: string, updateApplicationTpuReceiptsDto: UpdateApplicationTpuReceiptsDto): Promise<ApplicationTpuReceiptsEntity> {
    await this.applicationTpuReceiptsRepository.update(id, updateApplicationTpuReceiptsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationTpuReceiptsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationTpuReceiptsEntity[]> {
    return this.applicationTpuReceiptsRepository.find({
      where: { application_id: applicationId }
    });
  }
}