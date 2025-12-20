import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CmEquipment } from './cm-equipment.entity';
import { CreateCmEquipmentDto } from './dto/create-cm-equipment.dto';
import { UpdateCmEquipmentDto } from './dto/update-cm-equipment.dto';

@Injectable()
export class CmEquipmentService {
  constructor(
    @InjectRepository(CmEquipment)
    private cmEquipmentRepository: Repository<CmEquipment>,
  ) {}

  findAll(): Promise<CmEquipment[]> {
    return this.cmEquipmentRepository.find();
  }

  async findOne(id: string): Promise<CmEquipment> {
    const cmEquipment = await this.cmEquipmentRepository.findOneBy({ id });
    if (!cmEquipment) {
      throw new Error('CmEquipment not found');
    }
    return cmEquipment;
  }

  async create(createCmEquipmentDto: CreateCmEquipmentDto): Promise<CmEquipment> {
    const cmEquipment = this.cmEquipmentRepository.create(createCmEquipmentDto);
    return this.cmEquipmentRepository.save(cmEquipment);
  }

  async update(id: string, updateCmEquipmentDto: UpdateCmEquipmentDto): Promise<CmEquipment> {
    await this.cmEquipmentRepository.update(id, updateCmEquipmentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cmEquipmentRepository.softDelete(id);
  }
}
