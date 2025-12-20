import { Module } from '@nestjs/common';
import { KruApplicationDocumentService } from './kru-application-documents.service';
import { KruApplicationDocumentEntityController } from './kru-application-documents.controller';
import { KruApplicationDocumentEntity } from './kru-application-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KruApplicationDocumentEntity])],
  providers: [KruApplicationDocumentService],
  controllers: [KruApplicationDocumentEntityController],
  exports: [KruApplicationDocumentService],
})
export class KruApplicationDocumentModule {}

