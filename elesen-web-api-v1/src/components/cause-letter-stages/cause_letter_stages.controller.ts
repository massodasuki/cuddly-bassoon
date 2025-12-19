import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauseLetterStagesService } from './cause_letter_stages.service';
import { CreateCauseLetterStagesDto } from './dto/create-cause_letter_stages.dto';
import { UpdateCauseLetterStagesDto } from './dto/update-cause_letter_stages.dto';

@Controller('cause_letter_stages')
export class CauseLetterStagesController {
  constructor(private readonly causeletterstagesservice: CauseLetterStagesService) {}

  @Post()
  create(@Body() createCauseLetterStagesDto: CreateCauseLetterStagesDto) {
    return this.causeletterstagesservice.create(createCauseLetterStagesDto);
  }

  @Get()
  findAll() {
    return this.causeletterstagesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causeletterstagesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.causeletterstagesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauseLetterStagesDto: UpdateCauseLetterStagesDto) {
    return this.causeletterstagesservice.update(id, updateCauseLetterStagesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causeletterstagesservice.remove(id);
  }
}