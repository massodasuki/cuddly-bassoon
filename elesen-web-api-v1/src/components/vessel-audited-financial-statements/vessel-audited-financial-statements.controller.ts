import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselAuditedFinancialStatementsService } from './vessel-audited-financial-statements.service';
import { CreateVesselAuditedFinancialStatementsDto } from './dto/create-vessel-audited-financial-statements.dto';
import { UpdateVesselAuditedFinancialStatementsDto } from './dto/update-vessel-audited-financial-statements.dto';

@Controller('vessel_audited_financial_statements')
export class VesselAuditedFinancialStatementsController {
  constructor(private readonly vesselauditedfinancialstatementsservice: VesselAuditedFinancialStatementsService) {}

  @Post()
  create(@Body() createVesselAuditedFinancialStatementsDto: CreateVesselAuditedFinancialStatementsDto) {
    return this.vesselauditedfinancialstatementsservice.create(createVesselAuditedFinancialStatementsDto);
  }

  @Get()
  findAll() {
    return this.vesselauditedfinancialstatementsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselauditedfinancialstatementsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselauditedfinancialstatementsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselAuditedFinancialStatementsDto: UpdateVesselAuditedFinancialStatementsDto) {
    return this.vesselauditedfinancialstatementsservice.update(id, updateVesselAuditedFinancialStatementsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselauditedfinancialstatementsservice.remove(id);
  }
}