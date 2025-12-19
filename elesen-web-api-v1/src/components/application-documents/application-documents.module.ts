import { Module } from '@nestjs/common';
import { ApplicationDocumentsService } from './application-documents.service';
import { ApplicationDocumentsController } from './application-documents.controller';
import { ApplicationDocumentsEntity } from './application-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationDocumentsEntity])],
  providers: [ApplicationDocumentsService],
  controllers: [ApplicationDocumentsController],
  exports: [ApplicationDocumentsService],
})
export class ApplicationDocumentsModule {}