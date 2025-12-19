import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationChangeVesselToolApprovalLogService } from './application_change_vessel_tool_approval_log.service';
import { CreateApplicationChangeVesselToolApprovalLogDto } from './dto/create-application_change_vessel_tool_approval_log.dto';
import { UpdateApplicationChangeVesselToolApprovalLogDto } from './dto/update-application_change_vessel_tool_approval_log.dto';

@Controller('application_change_vessel_tool_approval_log')
export class ApplicationChangeVesselToolApprovalLogController {
  constructor(private readonly applicationchangevesseltoolapprovallogservice: ApplicationChangeVesselToolApprovalLogService) {}

  @Post()
  create(@Body() createApplicationChangeVesselToolApprovalLogDto: CreateApplicationChangeVesselToolApprovalLogDto) {
    return this.applicationchangevesseltoolapprovallogservice.create(createApplicationChangeVesselToolApprovalLogDto);
  }

  @Get()
  findAll() {
    return this.applicationchangevesseltoolapprovallogservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationchangevesseltoolapprovallogservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationchangevesseltoolapprovallogservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationChangeVesselToolApprovalLogDto: UpdateApplicationChangeVesselToolApprovalLogDto) {
    return this.applicationchangevesseltoolapprovallogservice.update(id, updateApplicationChangeVesselToolApprovalLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationchangevesseltoolapprovallogservice.remove(id);
  }
}