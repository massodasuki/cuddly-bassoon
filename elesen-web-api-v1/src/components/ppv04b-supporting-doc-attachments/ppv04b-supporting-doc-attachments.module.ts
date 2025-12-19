import { Module } from '@nestjs/common';
import { Ppv04bSupportingDocAttachmentsService } from './ppv04b-supporting-doc-attachments.service';
import { Ppv04bSupportingDocAttachmentsController } from './ppv04b-supporting-doc-attachments.controller';
import { Ppv04bSupportingDocAttachmentsEntity } from './ppv04b-supporting-doc-attachments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bSupportingDocAttachmentsEntity])],
  providers: [Ppv04bSupportingDocAttachmentsService],
  controllers: [Ppv04bSupportingDocAttachmentsController],
  exports: [Ppv04bSupportingDocAttachmentsService],
})
export class Ppv04bSupportingDocAttachmentsModule {}