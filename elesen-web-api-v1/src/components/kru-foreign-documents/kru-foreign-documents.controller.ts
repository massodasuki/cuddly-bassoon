import { Controller, Get, Param } from '@nestjs/common';
import { KruForeignDocumentService } from './kru-foreign-documents.service';
import { KruForeignDocumentEntity } from './kru-foreign-documents.entity';

@Controller('kru-foreign-documents')
export class KruForeignDocumentEntityController {
  constructor(private readonly kruForeignDocumentsService: KruForeignDocumentService) {}

  @Get()
  findAll(): Promise<KruForeignDocumentEntity[]> {
    return this.kruForeignDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruForeignDocumentEntity> {
    return this.kruForeignDocumentsService.findOne(id);
  }
}

