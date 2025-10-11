import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Announcement } from './announcement.entity';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcement)
    private announcementsRepository: Repository<Announcement>,
  ) {}

  findAll(): Promise<Announcement[]> {
    return this.announcementsRepository.find();
  }

  async findOne(id: string): Promise<Announcement> {
    const announcement = await this.announcementsRepository.findOneBy({ id });
    if (!announcement) {
      throw new Error('Announcement not found');
    }
    return announcement;
  }

  async create(createAnnouncementDto: CreateAnnouncementDto): Promise<Announcement> {
    const announcement = this.announcementsRepository.create(createAnnouncementDto);
    return this.announcementsRepository.save(announcement);
  }

  async update(id: string, updateAnnouncementDto: UpdateAnnouncementDto): Promise<Announcement> {
    await this.announcementsRepository.update(id, updateAnnouncementDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.announcementsRepository.delete(id);
  }
}