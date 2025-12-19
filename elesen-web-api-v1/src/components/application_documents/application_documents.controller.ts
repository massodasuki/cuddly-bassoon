import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationDocumentsService } from './application_documents.service';
import { CreateApplicationDocumentsDto } from './dto/create-application_documents.dto';
import { UpdateApplicationDocumentsDto } from './dto/update-application_documents.dto';

@Controller('application_documents')
export class ApplicationDocumentsController {
  constructor(private readonly applicationdocumentsservice: ApplicationDocumentsService) {}

  @Post()
  create(@Body() createApplicationDocumentsDto: CreateApplicationDocumentsDto) {
    return this.applicationdocumentsservice.create(createApplicationDocumentsDto);
  }

  @Get()
  findAll() {
    return this.applicationdocumentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationdocumentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationdocumentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationDocumentsDto: UpdateApplicationDocumentsDto) {
    return this.applicationdocumentsservice.update(id, updateApplicationDocumentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationdocumentsservice.remove(id);
  }
}