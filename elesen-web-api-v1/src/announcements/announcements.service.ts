import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnnouncementEntity } from './announcement.entity';
import { CreateAnnouncementEntityDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementEntityDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(AnnouncementEntity)
    private announcementsRepository: Repository<AnnouncementEntity>,
  ) {}

  findAll(): Promise<AnnouncementEntity[]> {
    return this.announcementsRepository.find();
  }

  async findOne(id: string): Promise<AnnouncementEntity> {
    const announcement = await this.announcementsRepository.findOneBy({ id });
    if (!announcement) {
      throw new Error('AnnouncementEntity not found');
    }
    return announcement;
  }

  async create(createAnnouncementEntityDto: CreateAnnouncementEntityDto): Promise<AnnouncementEntity> {
    const announcement = this.announcementsRepository.create(createAnnouncementEntityDto);
    return this.announcementsRepository.save(announcement);
  }

  async update(id: string, updateAnnouncementEntityDto: UpdateAnnouncementEntityDto): Promise<AnnouncementEntity> {
    await this.announcementsRepository.update(id, updateAnnouncementEntityDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.announcementsRepository.delete(id);
  }
}