import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Approval } from './approvals.entity';
import { CreateApprovalDto } from './dto/create-approval.dto';
import { UpdateApprovalDto } from './dto/update-approval.dto';

@Injectable()
export class ApprovalsService {
  constructor(
    @InjectRepository(Approval)
    private approvalsRepository: Repository<Approval>,
  ) {}

  findAll(): Promise<Approval[]> {
    return this.approvalsRepository.find();
  }

  async findOne(id: string): Promise<Approval> {
    const approval = await this.approvalsRepository.findOneBy({ id });
    if (!approval) {
      throw new Error('Approval not found');
    }
    return approval;
  }

  async create(createApprovalDto: CreateApprovalDto): Promise<Approval> {
    const approval = this.approvalsRepository.create(createApprovalDto);
    return this.approvalsRepository.save(approval);
  }

  async update(id: string, updateApprovalDto: UpdateApprovalDto): Promise<Approval> {
    await this.approvalsRepository.update(id, updateApprovalDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.approvalsRepository.delete(id);
  }
}
