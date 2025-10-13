import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUser } from './profile-users.entity';
import { CreateProfileUserDto } from './dto/create-profile-users.dto';
import { UpdateProfileUserDto } from './dto/update-profile-users.dto';

@Injectable()
export class ProfileUserService {
  constructor(
    @InjectRepository(ProfileUser)
    private profileUsersRepository: Repository<ProfileUser>,
  ) {}

  async create(createProfileUserDto: CreateProfileUserDto): Promise<ProfileUser> {
    const entity = this.profileUsersRepository.create(createProfileUserDto as any);
    const savedEntity = await this.profileUsersRepository.save(entity);
    return Array.isArray(savedEntity) ? savedEntity[0] : savedEntity;
  }

  findAll(): Promise<ProfileUser[]> {
    return this.profileUsersRepository.find();
  }

  async findOne(id: string): Promise<ProfileUser> {
    const entity = await this.profileUsersRepository.findOneBy({ id: +id });
    if (!entity) {
      throw new NotFoundException(`ProfileUser with ID ${id} not found`);
    }
    return entity;
  }

  async update(id: string, updateProfileUserDto: UpdateProfileUserDto): Promise<ProfileUser> {
    const entity = await this.findOne(id);
    Object.assign(entity, updateProfileUserDto);
    return this.profileUsersRepository.save(entity);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    await this.profileUsersRepository.remove(entity);
  }
}