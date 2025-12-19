import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bCheckDocumentOneService } from './ppv04b-check-document-one.service';
import { CreatePpv04bCheckDocumentOneDto } from './dto/create-ppv04b-check-document-one.dto';
import { UpdatePpv04bCheckDocumentOneDto } from './dto/update-ppv04b-check-document-one.dto';

@Controller('ppv04b_check_document_one')
export class Ppv04bCheckDocumentOneController {
  constructor(private readonly ppv04bcheckdocumentoneservice: Ppv04bCheckDocumentOneService) {}

  @Post()
  create(@Body() createPpv04bCheckDocumentOneDto: CreatePpv04bCheckDocumentOneDto) {
    return this.ppv04bcheckdocumentoneservice.create(createPpv04bCheckDocumentOneDto);
  }

  @Get()
  findAll() {
    return this.ppv04bcheckdocumentoneservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bcheckdocumentoneservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bcheckdocumentoneservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bCheckDocumentOneDto: UpdatePpv04bCheckDocumentOneDto) {
    return this.ppv04bcheckdocumentoneservice.update(id, updatePpv04bCheckDocumentOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bcheckdocumentoneservice.remove(id);
  }
}