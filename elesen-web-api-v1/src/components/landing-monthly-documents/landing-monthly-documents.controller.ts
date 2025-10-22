import { Controller, Get, Param } from '@nestjs/common';
import { LandingMonthlyDocumentService } from './landing-monthly-documents.service';
import { LandingMonthlyDocumentEntity } from './landing-monthly-documents.entity';

@Controller('landing-monthly-documents')
export class LandingMonthlyDocumentEntityController {
  constructor(private readonly landingMonthlyDocumentsService: LandingMonthlyDocumentService) {}

  @Get()
  findAll(): Promise<LandingMonthlyDocumentEntity[]> {
    return this.landingMonthlyDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingMonthlyDocumentEntity> {
    return this.landingMonthlyDocumentsService.findOne(id);
  }
}
