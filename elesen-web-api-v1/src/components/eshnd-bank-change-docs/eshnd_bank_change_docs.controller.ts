import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EshndBankChangeDocsService } from './eshnd_bank_change_docs.service';
import { CreateEshndBankChangeDocsDto } from './dto/create-eshnd_bank_change_docs.dto';
import { UpdateEshndBankChangeDocsDto } from './dto/update-eshnd_bank_change_docs.dto';

@Controller('eshnd_bank_change_docs')
export class EshndBankChangeDocsController {
  constructor(private readonly eshndbankchangedocsservice: EshndBankChangeDocsService) {}

  @Post()
  create(@Body() createEshndBankChangeDocsDto: CreateEshndBankChangeDocsDto) {
    return this.eshndbankchangedocsservice.create(createEshndBankChangeDocsDto);
  }

  @Get()
  findAll() {
    return this.eshndbankchangedocsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eshndbankchangedocsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.eshndbankchangedocsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEshndBankChangeDocsDto: UpdateEshndBankChangeDocsDto) {
    return this.eshndbankchangedocsservice.update(id, updateEshndBankChangeDocsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eshndbankchangedocsservice.remove(id);
  }
}