import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EshndBankAccChangesService } from './eshnd_bank_acc_changes.service';
import { CreateEshndBankAccChangesDto } from './dto/create-eshnd_bank_acc_changes.dto';
import { UpdateEshndBankAccChangesDto } from './dto/update-eshnd_bank_acc_changes.dto';

@Controller('eshnd_bank_acc_changes')
export class EshndBankAccChangesController {
  constructor(private readonly eshndbankaccchangesservice: EshndBankAccChangesService) {}

  @Post()
  create(@Body() createEshndBankAccChangesDto: CreateEshndBankAccChangesDto) {
    return this.eshndbankaccchangesservice.create(createEshndBankAccChangesDto);
  }

  @Get()
  findAll() {
    return this.eshndbankaccchangesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eshndbankaccchangesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.eshndbankaccchangesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEshndBankAccChangesDto: UpdateEshndBankAccChangesDto) {
    return this.eshndbankaccchangesservice.update(id, updateEshndBankAccChangesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eshndbankaccchangesservice.remove(id);
  }
}