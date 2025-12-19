import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bCheckDocumentService } from './ppv04b_check_document.service';
import { CreatePpv04bCheckDocumentDto } from './dto/create-ppv04b_check_document.dto';
import { UpdatePpv04bCheckDocumentDto } from './dto/update-ppv04b_check_document.dto';

@Controller('ppv04b_check_document')
export class Ppv04bCheckDocumentController {
  constructor(private readonly ppv04bcheckdocumentservice: Ppv04bCheckDocumentService) {}

  @Post()
  create(@Body() createPpv04bCheckDocumentDto: CreatePpv04bCheckDocumentDto) {
    return this.ppv04bcheckdocumentservice.create(createPpv04bCheckDocumentDto);
  }

  @Get()
  findAll() {
    return this.ppv04bcheckdocumentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bcheckdocumentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bcheckdocumentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bCheckDocumentDto: UpdatePpv04bCheckDocumentDto) {
    return this.ppv04bcheckdocumentservice.update(id, updatePpv04bCheckDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bcheckdocumentservice.remove(id);
  }
}