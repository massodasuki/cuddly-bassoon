import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseTransferDocsService } from './base-transfer-docs.service';
import { CreateBaseTransferDocsDto } from './dto/create-base-transfer-docs.dto';
import { UpdateBaseTransferDocsDto } from './dto/update-base-transfer-docs.dto';

@Controller('base_transfer_docs')
export class BaseTransferDocsController {
  constructor(private readonly basetransferdocsservice: BaseTransferDocsService) {}

  @Post()
  create(@Body() createBaseTransferDocsDto: CreateBaseTransferDocsDto) {
    return this.basetransferdocsservice.create(createBaseTransferDocsDto);
  }

  @Get()
  findAll() {
    return this.basetransferdocsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basetransferdocsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.basetransferdocsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseTransferDocsDto: UpdateBaseTransferDocsDto) {
    return this.basetransferdocsservice.update(id, updateBaseTransferDocsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basetransferdocsservice.remove(id);
  }
}