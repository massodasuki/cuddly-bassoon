import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Audit } from './audits.entity';
import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';

@Injectable()
export class AuditsService {
  constructor(
    @InjectRepository(Audit)
    private auditsRepository: Repository<Audit>,
  ) {}

  findAll(): Promise<Audit[]> {
    return this.auditsRepository.find();
  }

  async findOne(id: string): Promise<Audit> {
    const audit = await this.auditsRepository.findOneBy({ id });
    if (!audit) {
      throw new Error('Audit not found');
    }
    return audit;
  }

  async create(createAuditDto: CreateAuditDto): Promise<Audit> {
    const audit = this.auditsRepository.create(createAuditDto);
    return this.auditsRepository.save(audit);
  }

  async update(id: string, updateAuditDto: UpdateAuditDto): Promise<Audit> {
    await this.auditsRepository.update(id, updateAuditDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.auditsRepository.delete(id);
  }
}
