import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PantasCertificatesEntity } from './pantas-certificates.entity';
import { CreatePantasCertificatesDto } from './dto/create-pantas-certificates.dto';
import { UpdatePantasCertificatesDto } from './dto/update-pantas-certificates.dto';

@Injectable()
export class PantasCertificatesService {
  constructor(
    @InjectRepository(PantasCertificatesEntity)
    private pantasCertificatesRepository: Repository<PantasCertificatesEntity>,
  ) {}

  findAll(): Promise<PantasCertificatesEntity[]> {
    return this.pantasCertificatesRepository.find();
  }

  async findOne(id: string): Promise<PantasCertificatesEntity> {
    const entity = await this.pantasCertificatesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PantasCertificatesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPantasCertificatesDto: CreatePantasCertificatesDto): Promise<PantasCertificatesEntity> {
    const entity = this.pantasCertificatesRepository.create(createPantasCertificatesDto);
    return this.pantasCertificatesRepository.save(entity);
  }

  async update(id: string, updatePantasCertificatesDto: UpdatePantasCertificatesDto): Promise<PantasCertificatesEntity> {
    await this.pantasCertificatesRepository.update(id, updatePantasCertificatesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pantasCertificatesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PantasCertificatesEntity[]> {
    return this.pantasCertificatesRepository.find({
      where: { application_id: applicationId }
    });
  }
}