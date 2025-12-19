import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NelayanDaratCardsEntity } from './nelayan-darat-cards.entity';
import { CreateNelayanDaratCardsDto } from './dto/create-nelayan-darat-cards.dto';
import { UpdateNelayanDaratCardsDto } from './dto/update-nelayan-darat-cards.dto';

@Injectable()
export class NelayanDaratCardsService {
  constructor(
    @InjectRepository(NelayanDaratCardsEntity)
    private nelayanDaratCardsRepository: Repository<NelayanDaratCardsEntity>,
  ) {}

  findAll(): Promise<NelayanDaratCardsEntity[]> {
    return this.nelayanDaratCardsRepository.find();
  }

  async findOne(id: string): Promise<NelayanDaratCardsEntity> {
    const entity = await this.nelayanDaratCardsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`NelayanDaratCardsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createNelayanDaratCardsDto: CreateNelayanDaratCardsDto): Promise<NelayanDaratCardsEntity> {
    const entity = this.nelayanDaratCardsRepository.create(createNelayanDaratCardsDto);
    return this.nelayanDaratCardsRepository.save(entity);
  }

  async update(id: string, updateNelayanDaratCardsDto: UpdateNelayanDaratCardsDto): Promise<NelayanDaratCardsEntity> {
    await this.nelayanDaratCardsRepository.update(id, updateNelayanDaratCardsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.nelayanDaratCardsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<NelayanDaratCardsEntity[]> {
    return this.nelayanDaratCardsRepository.find({
      where: { application_id: applicationId }
    });
  }
}