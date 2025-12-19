import { Module } from '@nestjs/common';
import { Ppv04bCheckDocumentTwoService } from './ppv04b-check-document-two.service';
import { Ppv04bCheckDocumentTwoController } from './ppv04b-check-document-two.controller';
import { Ppv04bCheckDocumentTwoEntity } from './ppv04b-check-document-two.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bCheckDocumentTwoEntity])],
  providers: [Ppv04bCheckDocumentTwoService],
  controllers: [Ppv04bCheckDocumentTwoController],
  exports: [Ppv04bCheckDocumentTwoService],
})
export class Ppv04bCheckDocumentTwoModule {}