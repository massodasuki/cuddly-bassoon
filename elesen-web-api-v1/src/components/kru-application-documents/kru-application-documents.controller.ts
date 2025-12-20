import { Controller, Get, Param } from '@nestjs/common';
import { KruApplicationDocumentService } from './kru-application-documents.service';
import { KruApplicationDocumentEntity } from './kru-application-documents.entity';

@Controller('kru-application-documents')
export class KruApplicationDocumentEntityController {
  constructor(private readonly kruApplicationDocumentsService: KruApplicationDocumentService) {}

  @Get()
  findAll(): Promise<KruApplicationDocumentEntity[]> {
    return this.kruApplicationDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<KruApplicationDocumentEntity> {
    return this.kruApplicationDocumentsService.findOne(id);
  }
}

