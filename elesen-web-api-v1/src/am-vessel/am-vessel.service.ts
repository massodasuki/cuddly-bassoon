import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmVessel } from './am-vessel.entity';
import { CreateAmVesselDto } from './dto/create-am-vessel.dto';
import { UpdateAmVesselDto } from './dto/update-am-vessel.dto';

@Injectable()
export class AmVesselService {
  constructor(
    @InjectRepository(AmVessel)
    private amVesselRepository: Repository<AmVessel>,
  ) {}

  findAll(): Promise<AmVessel[]> {
    return this.amVesselRepository.find();
  }

  async findOne(id: number): Promise<AmVessel> {
    const amVessel = await this.amVesselRepository.findOneBy({ id });
    if (!amVessel) {
      throw new Error('AmVessel not found');
    }
    return amVessel;
  }

  async create(createAmVesselDto: CreateAmVesselDto): Promise<AmVessel> {
    const amVessel = this.amVesselRepository.create(createAmVesselDto);
    return this.amVesselRepository.save(amVessel);
  }

  async update(id: number, updateAmVesselDto: UpdateAmVesselDto): Promise<AmVessel> {
    await this.amVesselRepository.update(id, updateAmVesselDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.amVesselRepository.delete(id);
  }
}