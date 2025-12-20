import { Controller, Get, Param } from '@nestjs/common';
import { KruDocumentService } from './kru-documents.service';
import { KruDocumentEntity } from './kru-documents.entity';

@Controller('kru-documents')
export class KruDocumentEntityController {
  constructor(private readonly kruDocumentsService: KruDocumentService) {}

  @Get()
  findAll(): Promise<KruDocumentEntity[]> {
    return this.kruDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruDocumentEntity> {
    return this.kruDocumentsService.findOne(id);
  }
}

