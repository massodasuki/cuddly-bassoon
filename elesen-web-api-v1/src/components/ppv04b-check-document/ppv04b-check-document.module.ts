import { Module } from '@nestjs/common';
import { Ppv04bCheckDocumentService } from './ppv04b-check-document.service';
import { Ppv04bCheckDocumentController } from './ppv04b-check-document.controller';
import { Ppv04bCheckDocumentEntity } from './ppv04b-check-document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheckDocumentEntity])],
  providers: [Ppv04bCheckDocumentService],
  controllers: [Ppv04bCheckDocumentController],
  exports: [Ppv04bCheckDocumentService],
})
export class Ppv04bCheckDocumentModule {}