import { Controller, Get, Param } from '@nestjs/common';
import { LandingDocumentService } from './landing-documents.service';
import { LandingDocumentEntity } from './landing-documents.entity';

@Controller('landing-documents')
export class LandingDocumentEntityController {
  constructor(private readonly landingDocumentsService: LandingDocumentService) {}

  @Get()
  findAll(): Promise<LandingDocumentEntity[]> {
    return this.landingDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<LandingDocumentEntity> {
    return this.landingDocumentsService.findOne(id);
  }
}
