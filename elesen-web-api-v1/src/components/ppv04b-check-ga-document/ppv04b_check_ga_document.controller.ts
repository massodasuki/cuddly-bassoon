import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bCheckGaDocumentService } from './ppv04b_check_ga_document.service';
import { CreatePpv04bCheckGaDocumentDto } from './dto/create-ppv04b_check_ga_document.dto';
import { UpdatePpv04bCheckGaDocumentDto } from './dto/update-ppv04b_check_ga_document.dto';

@Controller('ppv04b_check_ga_document')
export class Ppv04bCheckGaDocumentController {
  constructor(private readonly ppv04bcheckgadocumentservice: Ppv04bCheckGaDocumentService) {}

  @Post()
  create(@Body() createPpv04bCheckGaDocumentDto: CreatePpv04bCheckGaDocumentDto) {
    return this.ppv04bcheckgadocumentservice.create(createPpv04bCheckGaDocumentDto);
  }

  @Get()
  findAll() {
    return this.ppv04bcheckgadocumentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bcheckgadocumentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bcheckgadocumentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bCheckGaDocumentDto: UpdatePpv04bCheckGaDocumentDto) {
    return this.ppv04bcheckgadocumentservice.update(id, updatePpv04bCheckGaDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bcheckgadocumentservice.remove(id);
  }
}