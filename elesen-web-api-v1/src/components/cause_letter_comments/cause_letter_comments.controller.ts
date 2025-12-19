import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauseLetterCommentsService } from './cause_letter_comments.service';
import { CreateCauseLetterCommentsDto } from './dto/create-cause_letter_comments.dto';
import { UpdateCauseLetterCommentsDto } from './dto/update-cause_letter_comments.dto';

@Controller('cause_letter_comments')
export class CauseLetterCommentsController {
  constructor(private readonly causelettercommentsservice: CauseLetterCommentsService) {}

  @Post()
  create(@Body() createCauseLetterCommentsDto: CreateCauseLetterCommentsDto) {
    return this.causelettercommentsservice.create(createCauseLetterCommentsDto);
  }

  @Get()
  findAll() {
    return this.causelettercommentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causelettercommentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.causelettercommentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauseLetterCommentsDto: UpdateCauseLetterCommentsDto) {
    return this.causelettercommentsservice.update(id, updateCauseLetterCommentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causelettercommentsservice.remove(id);
  }
}