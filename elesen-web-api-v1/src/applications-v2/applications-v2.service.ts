import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationV2 } from './application-v2.entity';
import { CreateApplicationV2Dto } from './dto/create-application-v2.dto';
import { UpdateApplicationV2Dto } from './dto/update-application-v2.dto';

@Injectable()
export class ApplicationsV2Service {
  constructor(
    @InjectRepository(ApplicationV2)
    private applicationsV2Repository: Repository<ApplicationV2>,
  ) {}

  findAll(): Promise<ApplicationV2[]> {
    return this.applicationsV2Repository.find();
  }

  async findOne(id: string): Promise<ApplicationV2> {
    const applicationV2 = await this.applicationsV2Repository.findOneBy({ id });
    if (!applicationV2) {
      throw new Error('ApplicationV2 not found');
    }
    return applicationV2;
  }

  async create(createApplicationV2Dto: CreateApplicationV2Dto): Promise<ApplicationV2> {
    const applicationV2 = this.applicationsV2Repository.create(createApplicationV2Dto);
    return this.applicationsV2Repository.save(applicationV2);
  }

  async update(id: string, updateApplicationV2Dto: UpdateApplicationV2Dto): Promise<ApplicationV2> {
    await this.applicationsV2Repository.update(id, updateApplicationV2Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationsV2Repository.delete(id);
  }
}