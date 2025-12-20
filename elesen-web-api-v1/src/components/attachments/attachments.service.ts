import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attachment } from './attachments.entity';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';

@Injectable()
export class AttachmentsService {
  constructor(
    @InjectRepository(Attachment)
    private attachmentsRepository: Repository<Attachment>,
  ) {}

  findAll(): Promise<Attachment[]> {
    return this.attachmentsRepository.find();
  }

  async findOne(id: string): Promise<Attachment> {
    const attachment = await this.attachmentsRepository.findOneBy({ id });
    if (!attachment) {
      throw new Error('Attachment not found');
    }
    return attachment;
  }

  async create(createAttachmentDto: CreateAttachmentDto): Promise<Attachment> {
    const attachment = this.attachmentsRepository.create(createAttachmentDto);
    return this.attachmentsRepository.save(attachment);
  }

  async update(id: string, updateAttachmentDto: UpdateAttachmentDto): Promise<Attachment> {
    await this.attachmentsRepository.update(id, updateAttachmentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.attachmentsRepository.delete(id);
  }
}
