import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CodeMaster } from './code-masters.entity';
import { CreateCodeMasterDto } from './dto/create-code-master.dto';
import { UpdateCodeMasterDto } from './dto/update-code-master.dto';

@Injectable()
export class CodeMastersService {
  constructor(
    @InjectRepository(CodeMaster)
    private codeMastersRepository: Repository<CodeMaster>,
  ) {}

  findAll(): Promise<CodeMaster[]> {
    return this.codeMastersRepository.find();
  }

  async findOne(id: string): Promise<CodeMaster> {
    const codeMaster = await this.codeMastersRepository.findOneBy({ id });
    if (!codeMaster) {
      throw new Error('CodeMaster not found');
    }
    return codeMaster;
  }

  async create(createCodeMasterDto: CreateCodeMasterDto): Promise<CodeMaster> {
    const codeMaster = this.codeMastersRepository.create(createCodeMasterDto);
    return this.codeMastersRepository.save(codeMaster);
  }

  async update(id: string, updateCodeMasterDto: UpdateCodeMasterDto): Promise<CodeMaster> {
    await this.codeMastersRepository.update(id, updateCodeMasterDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.codeMastersRepository.softDelete(id);
  }
}