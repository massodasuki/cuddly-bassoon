import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpPt01ApprovalsService } from './pp_pt_01_approvals.service';
import { CreatePpPt01ApprovalsDto } from './dto/create-pp_pt_01_approvals.dto';
import { UpdatePpPt01ApprovalsDto } from './dto/update-pp_pt_01_approvals.dto';

@Controller('pp_pt_01_approvals')
export class PpPt01ApprovalsController {
  constructor(private readonly pppt01approvalsservice: PpPt01ApprovalsService) {}

  @Post()
  create(@Body() createPpPt01ApprovalsDto: CreatePpPt01ApprovalsDto) {
    return this.pppt01approvalsservice.create(createPpPt01ApprovalsDto);
  }

  @Get()
  findAll() {
    return this.pppt01approvalsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pppt01approvalsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pppt01approvalsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpPt01ApprovalsDto: UpdatePpPt01ApprovalsDto) {
    return this.pppt01approvalsservice.update(id, updatePpPt01ApprovalsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pppt01approvalsservice.remove(id);
  }
}