import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationV2Vessel } from './application-v2-vessel.entity';
import { CreateApplicationV2VesselDto } from './dto/create-application-v2-vessel.dto';
import { UpdateApplicationV2VesselDto } from './dto/update-application-v2-vessel.dto';

@Injectable()
export class ApplicationV2VesselService {
  constructor(
    @InjectRepository(ApplicationV2Vessel)
    private applicationV2VesselRepository: Repository<ApplicationV2Vessel>,
  ) {}

  findAll(): Promise<ApplicationV2Vessel[]> {
    return this.applicationV2VesselRepository.find();
  }

  async findOne(application_id: string, vessel_id: string): Promise<ApplicationV2Vessel> {
    const applicationV2Vessel = await this.applicationV2VesselRepository.findOneBy({ application_id, vessel_id });
    if (!applicationV2Vessel) {
      throw new Error('ApplicationV2Vessel not found');
    }
    return applicationV2Vessel;
  }

  async create(createApplicationV2VesselDto: CreateApplicationV2VesselDto): Promise<ApplicationV2Vessel> {
    const applicationV2Vessel = this.applicationV2VesselRepository.create(createApplicationV2VesselDto);
    return this.applicationV2VesselRepository.save(applicationV2Vessel);
  }

  async update(application_id: string, vessel_id: string, updateApplicationV2VesselDto: UpdateApplicationV2VesselDto): Promise<ApplicationV2Vessel> {
    await this.applicationV2VesselRepository.update({ application_id, vessel_id }, updateApplicationV2VesselDto);
    return this.findOne(application_id, vessel_id);
  }

  async remove(application_id: string, vessel_id: string): Promise<void> {
    await this.applicationV2VesselRepository.delete({ application_id, vessel_id });
  }
}