import { Controller, Get, Param } from '@nestjs/common';
import { DaratDocumentService } from './darat-documents.service';
import { DaratDocumentEntity } from './darat-documents.entity';

@Controller('darat-documents')
export class DaratDocumentEntityController {
  constructor(private readonly daratDocumentsService: DaratDocumentService) {}

  @Get()
  findAll(): Promise<DaratDocumentEntity[]> {
    return this.daratDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratDocumentEntity> {
    return this.daratDocumentsService.findOne(id);
  }
}
