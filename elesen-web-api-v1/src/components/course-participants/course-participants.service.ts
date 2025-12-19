import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseParticipantsEntity } from './course-participants.entity';
import { CreateCourseParticipantsDto } from './dto/create-course-participants.dto';
import { UpdateCourseParticipantsDto } from './dto/update-course-participants.dto';

@Injectable()
export class CourseParticipantsService {
  constructor(
    @InjectRepository(CourseParticipantsEntity)
    private courseParticipantsRepository: Repository<CourseParticipantsEntity>,
  ) {}

  findAll(): Promise<CourseParticipantsEntity[]> {
    return this.courseParticipantsRepository.find();
  }

  async findOne(id: string): Promise<CourseParticipantsEntity> {
    const entity = await this.courseParticipantsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CourseParticipantsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCourseParticipantsDto: CreateCourseParticipantsDto): Promise<CourseParticipantsEntity> {
    const entity = this.courseParticipantsRepository.create(createCourseParticipantsDto);
    return this.courseParticipantsRepository.save(entity);
  }

  async update(id: string, updateCourseParticipantsDto: UpdateCourseParticipantsDto): Promise<CourseParticipantsEntity> {
    await this.courseParticipantsRepository.update(id, updateCourseParticipantsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.courseParticipantsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CourseParticipantsEntity[]> {
    return this.courseParticipantsRepository.find({
      where: { application_id: applicationId }
    });
  }
}