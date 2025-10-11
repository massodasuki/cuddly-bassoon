import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEshNd } from './application-esh-nd.entity';
import { CreateApplicationEshNdDto } from './dto/create-application-esh-nd.dto';
import { UpdateApplicationEshNdDto } from './dto/update-application-esh-nd.dto';

@Injectable()
export class ApplicationEshNdService {
  constructor(
    @InjectRepository(ApplicationEshNd)
    private applicationEshNdRepository: Repository<ApplicationEshNd>,
  ) {}

  findAll(): Promise<ApplicationEshNd[]> {
    return this.applicationEshNdRepository.find();
  }

  async findOne(id: string): Promise<ApplicationEshNd> {
    const applicationEshNd = await this.applicationEshNdRepository.findOneBy({ id });
    if (!applicationEshNd) {
      throw new Error('ApplicationEshNd not found');
    }
    return applicationEshNd;
  }

  async create(createApplicationEshNdDto: CreateApplicationEshNdDto): Promise<ApplicationEshNd> {
    const applicationEshNd = this.applicationEshNdRepository.create(createApplicationEshNdDto);
    return this.applicationEshNdRepository.save(applicationEshNd);
  }

  async update(id: string, updateApplicationEshNdDto: UpdateApplicationEshNdDto): Promise<ApplicationEshNd> {
    await this.applicationEshNdRepository.update(id, updateApplicationEshNdDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationEshNdRepository.delete(id);
  }
}