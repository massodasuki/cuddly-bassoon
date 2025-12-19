import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselBankStatementsService } from './vessel_bank_statements.service';
import { CreateVesselBankStatementsDto } from './dto/create-vessel_bank_statements.dto';
import { UpdateVesselBankStatementsDto } from './dto/update-vessel_bank_statements.dto';

@Controller('vessel_bank_statements')
export class VesselBankStatementsController {
  constructor(private readonly vesselbankstatementsservice: VesselBankStatementsService) {}

  @Post()
  create(@Body() createVesselBankStatementsDto: CreateVesselBankStatementsDto) {
    return this.vesselbankstatementsservice.create(createVesselBankStatementsDto);
  }

  @Get()
  findAll() {
    return this.vesselbankstatementsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselbankstatementsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselbankstatementsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselBankStatementsDto: UpdateVesselBankStatementsDto) {
    return this.vesselbankstatementsservice.update(id, updateVesselBankStatementsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselbankstatementsservice.remove(id);
  }
}