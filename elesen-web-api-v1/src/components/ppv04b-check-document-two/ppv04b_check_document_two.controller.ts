import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bCheckDocumentTwoService } from './ppv04b_check_document_two.service';
import { CreatePpv04bCheckDocumentTwoDto } from './dto/create-ppv04b_check_document_two.dto';
import { UpdatePpv04bCheckDocumentTwoDto } from './dto/update-ppv04b_check_document_two.dto';

@Controller('ppv04b_check_document_two')
export class Ppv04bCheckDocumentTwoController {
  constructor(private readonly ppv04bcheckdocumenttwoservice: Ppv04bCheckDocumentTwoService) {}

  @Post()
  create(@Body() createPpv04bCheckDocumentTwoDto: CreatePpv04bCheckDocumentTwoDto) {
    return this.ppv04bcheckdocumenttwoservice.create(createPpv04bCheckDocumentTwoDto);
  }

  @Get()
  findAll() {
    return this.ppv04bcheckdocumenttwoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bcheckdocumenttwoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bcheckdocumenttwoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bCheckDocumentTwoDto: UpdatePpv04bCheckDocumentTwoDto) {
    return this.ppv04bcheckdocumenttwoservice.update(id, updatePpv04bCheckDocumentTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bcheckdocumenttwoservice.remove(id);
  }
}