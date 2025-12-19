import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpDomestikStepHistoryService } from './slp_domestik_step_history.service';
import { CreateSlpDomestikStepHistoryDto } from './dto/create-slp_domestik_step_history.dto';
import { UpdateSlpDomestikStepHistoryDto } from './dto/update-slp_domestik_step_history.dto';

@Controller('slp_domestik_step_history')
export class SlpDomestikStepHistoryController {
  constructor(private readonly slpdomestikstephistoryservice: SlpDomestikStepHistoryService) {}

  @Post()
  create(@Body() createSlpDomestikStepHistoryDto: CreateSlpDomestikStepHistoryDto) {
    return this.slpdomestikstephistoryservice.create(createSlpDomestikStepHistoryDto);
  }

  @Get()
  findAll() {
    return this.slpdomestikstephistoryservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpdomestikstephistoryservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpdomestikstephistoryservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpDomestikStepHistoryDto: UpdateSlpDomestikStepHistoryDto) {
    return this.slpdomestikstephistoryservice.update(id, updateSlpDomestikStepHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpdomestikstephistoryservice.remove(id);
  }
}