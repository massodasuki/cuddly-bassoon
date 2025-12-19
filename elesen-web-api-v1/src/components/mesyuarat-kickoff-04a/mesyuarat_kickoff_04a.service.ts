import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MesyuaratKickoff04aEntity } from './mesyuarat_kickoff_04a.entity';
import { CreateMesyuaratKickoff04aDto } from './dto/create-mesyuarat_kickoff_04a.dto';
import { UpdateMesyuaratKickoff04aDto } from './dto/update-mesyuarat_kickoff_04a.dto';

@Injectable()
export class MesyuaratKickoff04aService {
  constructor(
    @InjectRepository(MesyuaratKickoff04aEntity)
    private mesyuaratKickoff04aRepository: Repository<MesyuaratKickoff04aEntity>,
  ) {}

  findAll(): Promise<MesyuaratKickoff04aEntity[]> {
    return this.mesyuaratKickoff04aRepository.find();
  }

  async findOne(id: string): Promise<MesyuaratKickoff04aEntity> {
    const entity = await this.mesyuaratKickoff04aRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MesyuaratKickoff04aEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMesyuaratKickoff04aDto: CreateMesyuaratKickoff04aDto): Promise<MesyuaratKickoff04aEntity> {
    const entity = this.mesyuaratKickoff04aRepository.create(createMesyuaratKickoff04aDto);
    return this.mesyuaratKickoff04aRepository.save(entity);
  }

  async update(id: string, updateMesyuaratKickoff04aDto: UpdateMesyuaratKickoff04aDto): Promise<MesyuaratKickoff04aEntity> {
    await this.mesyuaratKickoff04aRepository.update(id, updateMesyuaratKickoff04aDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mesyuaratKickoff04aRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MesyuaratKickoff04aEntity[]> {
    return this.mesyuaratKickoff04aRepository.find({
      where: { application_id: applicationId }
    });
  }
}