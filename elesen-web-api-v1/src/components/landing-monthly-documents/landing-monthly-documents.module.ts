import { Module } from '@nestjs/common';
import { LandingMonthlyDocumentService } from './landing-monthly-documents.service';
import { LandingMonthlyDocumentEntityController } from './landing-monthly-documents.controller';
import { LandingMonthlyDocumentEntity } from './landing-monthly-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingMonthlyDocumentEntity])],
  providers: [LandingMonthlyDocumentService],
  controllers: [LandingMonthlyDocumentEntityController],
  exports: [LandingMonthlyDocumentService],
})
export class LandingMonthlyDocumentModule {}

