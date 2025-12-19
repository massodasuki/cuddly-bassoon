import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NelayanDaratLicensesEntity } from './nelayan-darat-licenses.entity';
import { CreateNelayanDaratLicensesDto } from './dto/create-nelayan-darat-licenses.dto';
import { UpdateNelayanDaratLicensesDto } from './dto/update-nelayan-darat-licenses.dto';

@Injectable()
export class NelayanDaratLicensesService {
  constructor(
    @InjectRepository(NelayanDaratLicensesEntity)
    private nelayanDaratLicensesRepository: Repository<NelayanDaratLicensesEntity>,
  ) {}

  findAll(): Promise<NelayanDaratLicensesEntity[]> {
    return this.nelayanDaratLicensesRepository.find();
  }

  async findOne(id: string): Promise<NelayanDaratLicensesEntity> {
    const entity = await this.nelayanDaratLicensesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`NelayanDaratLicensesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createNelayanDaratLicensesDto: CreateNelayanDaratLicensesDto): Promise<NelayanDaratLicensesEntity> {
    const entity = this.nelayanDaratLicensesRepository.create(createNelayanDaratLicensesDto);
    return this.nelayanDaratLicensesRepository.save(entity);
  }

  async update(id: string, updateNelayanDaratLicensesDto: UpdateNelayanDaratLicensesDto): Promise<NelayanDaratLicensesEntity> {
    await this.nelayanDaratLicensesRepository.update(id, updateNelayanDaratLicensesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.nelayanDaratLicensesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<NelayanDaratLicensesEntity[]> {
    return this.nelayanDaratLicensesRepository.find({
      where: { application_id: applicationId }
    });
  }
}