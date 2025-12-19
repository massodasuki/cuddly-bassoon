import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RefCauseLetterWorkflowsService } from './ref_cause_letter_workflows.service';
import { CreateRefCauseLetterWorkflowsDto } from './dto/create-ref_cause_letter_workflows.dto';
import { UpdateRefCauseLetterWorkflowsDto } from './dto/update-ref_cause_letter_workflows.dto';

@Controller('ref_cause_letter_workflows')
export class RefCauseLetterWorkflowsController {
  constructor(private readonly refcauseletterworkflowsservice: RefCauseLetterWorkflowsService) {}

  @Post()
  create(@Body() createRefCauseLetterWorkflowsDto: CreateRefCauseLetterWorkflowsDto) {
    return this.refcauseletterworkflowsservice.create(createRefCauseLetterWorkflowsDto);
  }

  @Get()
  findAll() {
    return this.refcauseletterworkflowsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refcauseletterworkflowsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.refcauseletterworkflowsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRefCauseLetterWorkflowsDto: UpdateRefCauseLetterWorkflowsDto) {
    return this.refcauseletterworkflowsservice.update(id, updateRefCauseLetterWorkflowsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refcauseletterworkflowsservice.remove(id);
  }
}