import { Module } from '@nestjs/common';
import { Ppv04bCheckDocumentService } from './ppv04b_check_document.service';
import { Ppv04bCheckDocumentController } from './ppv04b_check_document.controller';
import { Ppv04bCheckDocumentEntity } from './ppv04b_check_document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheckDocumentEntity])],
  providers: [Ppv04bCheckDocumentService],
  controllers: [Ppv04bCheckDocumentController],
  exports: [Ppv04bCheckDocumentService],
})
export class Ppv04bCheckDocumentModule {}