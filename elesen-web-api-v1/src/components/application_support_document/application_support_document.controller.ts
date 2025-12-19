import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationSupportDocumentService } from './application_support_document.service';
import { CreateApplicationSupportDocumentDto } from './dto/create-application_support_document.dto';
import { UpdateApplicationSupportDocumentDto } from './dto/update-application_support_document.dto';

@Controller('application_support_document')
export class ApplicationSupportDocumentController {
  constructor(private readonly applicationsupportdocumentservice: ApplicationSupportDocumentService) {}

  @Post()
  create(@Body() createApplicationSupportDocumentDto: CreateApplicationSupportDocumentDto) {
    return this.applicationsupportdocumentservice.create(createApplicationSupportDocumentDto);
  }

  @Get()
  findAll() {
    return this.applicationsupportdocumentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsupportdocumentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationsupportdocumentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationSupportDocumentDto: UpdateApplicationSupportDocumentDto) {
    return this.applicationsupportdocumentservice.update(id, updateApplicationSupportDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsupportdocumentservice.remove(id);
  }
}