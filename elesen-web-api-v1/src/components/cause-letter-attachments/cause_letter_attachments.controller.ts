import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauseLetterAttachmentsService } from './cause_letter_attachments.service';
import { CreateCauseLetterAttachmentsDto } from './dto/create-cause_letter_attachments.dto';
import { UpdateCauseLetterAttachmentsDto } from './dto/update-cause_letter_attachments.dto';

@Controller('cause_letter_attachments')
export class CauseLetterAttachmentsController {
  constructor(private readonly causeletterattachmentsservice: CauseLetterAttachmentsService) {}

  @Post()
  create(@Body() createCauseLetterAttachmentsDto: CreateCauseLetterAttachmentsDto) {
    return this.causeletterattachmentsservice.create(createCauseLetterAttachmentsDto);
  }

  @Get()
  findAll() {
    return this.causeletterattachmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causeletterattachmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.causeletterattachmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauseLetterAttachmentsDto: UpdateCauseLetterAttachmentsDto) {
    return this.causeletterattachmentsservice.update(id, updateCauseLetterAttachmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causeletterattachmentsservice.remove(id);
  }
}