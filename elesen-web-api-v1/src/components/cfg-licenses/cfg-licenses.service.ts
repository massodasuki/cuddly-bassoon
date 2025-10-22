import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CfgLicense } from './cfg-licenses.entity';
import { CreateCfgLicenseDto } from './dto/create-cfg-license.dto';
import { UpdateCfgLicenseDto } from './dto/update-cfg-license.dto';

@Injectable()
export class CfgLicensesService {
  constructor(
    @InjectRepository(CfgLicense)
    private cfgLicensesRepository: Repository<CfgLicense>,
  ) {}

  findAll(): Promise<CfgLicense[]> {
    return this.cfgLicensesRepository.find();
  }

  async findOne(id: string): Promise<CfgLicense> {
    const cfgLicense = await this.cfgLicensesRepository.findOneBy({ id });
    if (!cfgLicense) {
      throw new Error('CfgLicense not found');
    }
    return cfgLicense;
  }

  async create(createCfgLicenseDto: CreateCfgLicenseDto): Promise<CfgLicense> {
    const cfgLicense = this.cfgLicensesRepository.create(createCfgLicenseDto);
    return this.cfgLicensesRepository.save(cfgLicense);
  }

  async update(id: string, updateCfgLicenseDto: UpdateCfgLicenseDto): Promise<CfgLicense> {
    await this.cfgLicensesRepository.update(id, updateCfgLicenseDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cfgLicensesRepository.softDelete(id);
  }
}