import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationLicensePrintLogsEntity } from './application_license_print_logs.entity';
import { CreateApplicationLicensePrintLogsDto } from './dto/create-application_license_print_logs.dto';
import { UpdateApplicationLicensePrintLogsDto } from './dto/update-application_license_print_logs.dto';

@Injectable()
export class ApplicationLicensePrintLogsService {
  constructor(
    @InjectRepository(ApplicationLicensePrintLogsEntity)
    private applicationLicensePrintLogsRepository: Repository<ApplicationLicensePrintLogsEntity>,
  ) {}

  findAll(): Promise<ApplicationLicensePrintLogsEntity[]> {
    return this.applicationLicensePrintLogsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationLicensePrintLogsEntity> {
    const entity = await this.applicationLicensePrintLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationLicensePrintLogsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationLicensePrintLogsDto: CreateApplicationLicensePrintLogsDto): Promise<ApplicationLicensePrintLogsEntity> {
    const entity = this.applicationLicensePrintLogsRepository.create(createApplicationLicensePrintLogsDto);
    return this.applicationLicensePrintLogsRepository.save(entity);
  }

  async update(id: string, updateApplicationLicensePrintLogsDto: UpdateApplicationLicensePrintLogsDto): Promise<ApplicationLicensePrintLogsEntity> {
    await this.applicationLicensePrintLogsRepository.update(id, updateApplicationLicensePrintLogsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationLicensePrintLogsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationLicensePrintLogsEntity[]> {
    return this.applicationLicensePrintLogsRepository.find({
      where: { application_id: applicationId }
    });
  }
}