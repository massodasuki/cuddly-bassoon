import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauseLettersService } from './cause_letters.service';
import { CreateCauseLettersDto } from './dto/create-cause_letters.dto';
import { UpdateCauseLettersDto } from './dto/update-cause_letters.dto';

@Controller('cause_letters')
export class CauseLettersController {
  constructor(private readonly causelettersservice: CauseLettersService) {}

  @Post()
  create(@Body() createCauseLettersDto: CreateCauseLettersDto) {
    return this.causelettersservice.create(createCauseLettersDto);
  }

  @Get()
  findAll() {
    return this.causelettersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causelettersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.causelettersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauseLettersDto: UpdateCauseLettersDto) {
    return this.causelettersservice.update(id, updateCauseLettersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causelettersservice.remove(id);
  }
}