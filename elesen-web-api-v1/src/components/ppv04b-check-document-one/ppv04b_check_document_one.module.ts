import { Module } from '@nestjs/common';
import { Ppv04bCheckDocumentOneService } from './ppv04b_check_document_one.service';
import { Ppv04bCheckDocumentOneController } from './ppv04b_check_document_one.controller';
import { Ppv04bCheckDocumentOneEntity } from './ppv04b_check_document_one.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheckDocumentOneEntity])],
  providers: [Ppv04bCheckDocumentOneService],
  controllers: [Ppv04bCheckDocumentOneController],
  exports: [Ppv04bCheckDocumentOneService],
})
export class Ppv04bCheckDocumentOneModule {}