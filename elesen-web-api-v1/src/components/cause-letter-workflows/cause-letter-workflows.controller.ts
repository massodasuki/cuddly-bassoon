import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauseLetterWorkflowsService } from './cause-letter-workflows.service';
import { CreateCauseLetterWorkflowsDto } from './dto/create-cause-letter-workflows.dto';
import { UpdateCauseLetterWorkflowsDto } from './dto/update-cause-letter-workflows.dto';

@Controller('cause_letter_workflows')
export class CauseLetterWorkflowsController {
  constructor(private readonly causeletterworkflowsservice: CauseLetterWorkflowsService) {}

  @Post()
  create(@Body() createCauseLetterWorkflowsDto: CreateCauseLetterWorkflowsDto) {
    return this.causeletterworkflowsservice.create(createCauseLetterWorkflowsDto);
  }

  @Get()
  findAll() {
    return this.causeletterworkflowsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causeletterworkflowsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.causeletterworkflowsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauseLetterWorkflowsDto: UpdateCauseLetterWorkflowsDto) {
    return this.causeletterworkflowsservice.update(id, updateCauseLetterWorkflowsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causeletterworkflowsservice.remove(id);
  }
}