import { Module } from '@nestjs/common';
import { LandingDocumentService } from './landing-documents.service';
import { LandingDocumentEntityController } from './landing-documents.controller';
import { LandingDocumentEntity } from './landing-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingDocumentEntity])],
  providers: [LandingDocumentService],
  controllers: [LandingDocumentEntityController],
  exports: [LandingDocumentService],
})
export class LandingDocumentModule {}

