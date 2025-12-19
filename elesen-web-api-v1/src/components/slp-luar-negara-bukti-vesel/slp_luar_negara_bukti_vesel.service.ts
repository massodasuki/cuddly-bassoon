import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpLuarNegaraBuktiVeselEntity } from './slp_luar_negara_bukti_vesel.entity';
import { CreateSlpLuarNegaraBuktiVeselDto } from './dto/create-slp_luar_negara_bukti_vesel.dto';
import { UpdateSlpLuarNegaraBuktiVeselDto } from './dto/update-slp_luar_negara_bukti_vesel.dto';

@Injectable()
export class SlpLuarNegaraBuktiVeselService {
  constructor(
    @InjectRepository(SlpLuarNegaraBuktiVeselEntity)
    private slpLuarNegaraBuktiVeselRepository: Repository<SlpLuarNegaraBuktiVeselEntity>,
  ) {}

  findAll(): Promise<SlpLuarNegaraBuktiVeselEntity[]> {
    return this.slpLuarNegaraBuktiVeselRepository.find();
  }

  async findOne(id: string): Promise<SlpLuarNegaraBuktiVeselEntity> {
    const entity = await this.slpLuarNegaraBuktiVeselRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpLuarNegaraBuktiVeselEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpLuarNegaraBuktiVeselDto: CreateSlpLuarNegaraBuktiVeselDto): Promise<SlpLuarNegaraBuktiVeselEntity> {
    const entity = this.slpLuarNegaraBuktiVeselRepository.create(createSlpLuarNegaraBuktiVeselDto);
    return this.slpLuarNegaraBuktiVeselRepository.save(entity);
  }

  async update(id: string, updateSlpLuarNegaraBuktiVeselDto: UpdateSlpLuarNegaraBuktiVeselDto): Promise<SlpLuarNegaraBuktiVeselEntity> {
    await this.slpLuarNegaraBuktiVeselRepository.update(id, updateSlpLuarNegaraBuktiVeselDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpLuarNegaraBuktiVeselRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpLuarNegaraBuktiVeselEntity[]> {
    return this.slpLuarNegaraBuktiVeselRepository.find({
      where: { application_id: applicationId }
    });
  }
}