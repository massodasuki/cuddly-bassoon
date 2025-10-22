import { Module } from '@nestjs/common';
import { KruDocumentService } from './kru-documents.service';
import { KruDocumentEntityController } from './kru-documents.controller';
import { KruDocumentEntity } from './kru-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruDocumentEntity])],
  providers: [KruDocumentService],
  controllers: [KruDocumentEntityController],
  exports: [KruDocumentService],
})
export class KruDocumentModule {}
