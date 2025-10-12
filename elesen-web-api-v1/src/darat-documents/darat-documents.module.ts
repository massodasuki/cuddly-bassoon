import { Module } from '@nestjs/common';
import { DaratDocumentService } from './darat-documents.service';
import { DaratDocumentEntityController } from './darat-documents.controller';
import { DaratDocumentEntity } from './darat-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratDocumentEntity])],
  providers: [DaratDocumentService],
  controllers: [DaratDocumentEntityController],
  exports: [DaratDocumentService],
})
export class DaratDocumentModule {}
