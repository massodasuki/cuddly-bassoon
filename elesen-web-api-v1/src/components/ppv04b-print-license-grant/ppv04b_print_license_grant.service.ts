import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bPrintLicenseGrantEntity } from './ppv04b_print_license_grant.entity';
import { CreatePpv04bPrintLicenseGrantDto } from './dto/create-ppv04b_print_license_grant.dto';
import { UpdatePpv04bPrintLicenseGrantDto } from './dto/update-ppv04b_print_license_grant.dto';

@Injectable()
export class Ppv04bPrintLicenseGrantService {
  constructor(
    @InjectRepository(Ppv04bPrintLicenseGrantEntity)
    private ppv04bPrintLicenseGrantRepository: Repository<Ppv04bPrintLicenseGrantEntity>,
  ) {}

  findAll(): Promise<Ppv04bPrintLicenseGrantEntity[]> {
    return this.ppv04bPrintLicenseGrantRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bPrintLicenseGrantEntity> {
    const entity = await this.ppv04bPrintLicenseGrantRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bPrintLicenseGrantEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bPrintLicenseGrantDto: CreatePpv04bPrintLicenseGrantDto): Promise<Ppv04bPrintLicenseGrantEntity> {
    const entity = this.ppv04bPrintLicenseGrantRepository.create(createPpv04bPrintLicenseGrantDto);
    return this.ppv04bPrintLicenseGrantRepository.save(entity);
  }

  async update(id: string, updatePpv04bPrintLicenseGrantDto: UpdatePpv04bPrintLicenseGrantDto): Promise<Ppv04bPrintLicenseGrantEntity> {
    await this.ppv04bPrintLicenseGrantRepository.update(id, updatePpv04bPrintLicenseGrantDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bPrintLicenseGrantRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bPrintLicenseGrantEntity[]> {
    return this.ppv04bPrintLicenseGrantRepository.find({
      where: { application_id: applicationId }
    });
  }
}