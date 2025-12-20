import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationV2ProfileUser } from './application-v2-profile-user.entity';
import { CreateApplicationV2ProfileUserDto } from './dto/create-application-v2-profile-user.dto';
import { UpdateApplicationV2ProfileUserDto } from './dto/update-application-v2-profile-user.dto';

@Injectable()
export class ApplicationV2ProfileUserService {
  constructor(
    @InjectRepository(ApplicationV2ProfileUser)
    private applicationV2ProfileUserRepository: Repository<ApplicationV2ProfileUser>,
  ) {}

  findAll(): Promise<ApplicationV2ProfileUser[]> {
    return this.applicationV2ProfileUserRepository.find();
  }

  async findOne(application_id: string, profile_user_id: string): Promise<ApplicationV2ProfileUser> {
    const applicationV2ProfileUser = await this.applicationV2ProfileUserRepository.findOneBy({ application_id, profile_user_id });
    if (!applicationV2ProfileUser) {
      throw new Error('ApplicationV2ProfileUser not found');
    }
    return applicationV2ProfileUser;
  }

  async create(createApplicationV2ProfileUserDto: CreateApplicationV2ProfileUserDto): Promise<ApplicationV2ProfileUser> {
    const applicationV2ProfileUser = this.applicationV2ProfileUserRepository.create(createApplicationV2ProfileUserDto);
    return this.applicationV2ProfileUserRepository.save(applicationV2ProfileUser);
  }

  async update(application_id: string, profile_user_id: string, updateApplicationV2ProfileUserDto: UpdateApplicationV2ProfileUserDto): Promise<ApplicationV2ProfileUser> {
    await this.applicationV2ProfileUserRepository.update({ application_id, profile_user_id }, updateApplicationV2ProfileUserDto);
    return this.findOne(application_id, profile_user_id);
  }

  async remove(application_id: string, profile_user_id: string): Promise<void> {
    await this.applicationV2ProfileUserRepository.delete({ application_id, profile_user_id });
  }
}
