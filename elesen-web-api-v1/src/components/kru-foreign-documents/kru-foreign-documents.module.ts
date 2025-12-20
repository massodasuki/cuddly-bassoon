import { Module } from '@nestjs/common';
import { KruForeignDocumentService } from './kru-foreign-documents.service';
import { KruForeignDocumentEntityController } from './kru-foreign-documents.controller';
import { KruForeignDocumentEntity } from './kru-foreign-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruForeignDocumentEntity])],
  providers: [KruForeignDocumentService],
  controllers: [KruForeignDocumentEntityController],
  exports: [KruForeignDocumentService],
})
export class KruForeignDocumentModule {}

