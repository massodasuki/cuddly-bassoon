import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bSupportingDocAttachmentsService } from './ppv04b_supporting_doc_attachments.service';
import { CreatePpv04bSupportingDocAttachmentsDto } from './dto/create-ppv04b_supporting_doc_attachments.dto';
import { UpdatePpv04bSupportingDocAttachmentsDto } from './dto/update-ppv04b_supporting_doc_attachments.dto';

@Controller('ppv04b_supporting_doc_attachments')
export class Ppv04bSupportingDocAttachmentsController {
  constructor(private readonly ppv04bsupportingdocattachmentsservice: Ppv04bSupportingDocAttachmentsService) {}

  @Post()
  create(@Body() createPpv04bSupportingDocAttachmentsDto: CreatePpv04bSupportingDocAttachmentsDto) {
    return this.ppv04bsupportingdocattachmentsservice.create(createPpv04bSupportingDocAttachmentsDto);
  }

  @Get()
  findAll() {
    return this.ppv04bsupportingdocattachmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bsupportingdocattachmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bsupportingdocattachmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bSupportingDocAttachmentsDto: UpdatePpv04bSupportingDocAttachmentsDto) {
    return this.ppv04bsupportingdocattachmentsservice.update(id, updatePpv04bSupportingDocAttachmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bsupportingdocattachmentsservice.remove(id);
  }
}