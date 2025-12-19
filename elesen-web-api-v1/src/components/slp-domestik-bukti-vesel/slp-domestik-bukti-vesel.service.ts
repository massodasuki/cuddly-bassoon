import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpDomestikBuktiVeselEntity } from './slp-domestik-bukti-vesel.entity';
import { CreateSlpDomestikBuktiVeselDto } from './dto/create-slp-domestik-bukti-vesel.dto';
import { UpdateSlpDomestikBuktiVeselDto } from './dto/update-slp-domestik-bukti-vesel.dto';

@Injectable()
export class SlpDomestikBuktiVeselService {
  constructor(
    @InjectRepository(SlpDomestikBuktiVeselEntity)
    private slpDomestikBuktiVeselRepository: Repository<SlpDomestikBuktiVeselEntity>,
  ) {}

  findAll(): Promise<SlpDomestikBuktiVeselEntity[]> {
    return this.slpDomestikBuktiVeselRepository.find();
  }

  async findOne(id: string): Promise<SlpDomestikBuktiVeselEntity> {
    const entity = await this.slpDomestikBuktiVeselRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpDomestikBuktiVeselEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpDomestikBuktiVeselDto: CreateSlpDomestikBuktiVeselDto): Promise<SlpDomestikBuktiVeselEntity> {
    const entity = this.slpDomestikBuktiVeselRepository.create(createSlpDomestikBuktiVeselDto);
    return this.slpDomestikBuktiVeselRepository.save(entity);
  }

  async update(id: string, updateSlpDomestikBuktiVeselDto: UpdateSlpDomestikBuktiVeselDto): Promise<SlpDomestikBuktiVeselEntity> {
    await this.slpDomestikBuktiVeselRepository.update(id, updateSlpDomestikBuktiVeselDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpDomestikBuktiVeselRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpDomestikBuktiVeselEntity[]> {
    return this.slpDomestikBuktiVeselRepository.find({
      where: { application_id: applicationId }
    });
  }
}