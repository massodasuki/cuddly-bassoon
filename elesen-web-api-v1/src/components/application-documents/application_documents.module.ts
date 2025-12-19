import { Module } from '@nestjs/common';
import { ApplicationDocumentsService } from './application_documents.service';
import { ApplicationDocumentsController } from './application_documents.controller';
import { ApplicationDocumentsEntity } from './application_documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationDocumentsEntity])],
  providers: [ApplicationDocumentsService],
  controllers: [ApplicationDocumentsController],
  exports: [ApplicationDocumentsService],
})
export class ApplicationDocumentsModule {}