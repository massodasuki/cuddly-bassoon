import { Module } from '@nestjs/common';
import { Ppv04bCheckGaDocumentService } from './ppv04b_check_ga_document.service';
import { Ppv04bCheckGaDocumentController } from './ppv04b_check_ga_document.controller';
import { Ppv04bCheckGaDocumentEntity } from './ppv04b_check_ga_document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheckGaDocumentEntity])],
  providers: [Ppv04bCheckGaDocumentService],
  controllers: [Ppv04bCheckGaDocumentController],
  exports: [Ppv04bCheckGaDocumentService],
})
export class Ppv04bCheckGaDocumentModule {}