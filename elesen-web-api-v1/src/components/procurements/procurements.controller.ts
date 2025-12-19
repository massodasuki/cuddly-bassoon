import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcurementsService } from './procurements.service';
import { CreateProcurementsDto } from './dto/create-procurements.dto';
import { UpdateProcurementsDto } from './dto/update-procurements.dto';

@Controller('procurements')
export class ProcurementsController {
  constructor(private readonly procurementsservice: ProcurementsService) {}

  @Post()
  create(@Body() createProcurementsDto: CreateProcurementsDto) {
    return this.procurementsservice.create(createProcurementsDto);
  }

  @Get()
  findAll() {
    return this.procurementsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procurementsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.procurementsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcurementsDto: UpdateProcurementsDto) {
    return this.procurementsservice.update(id, updateProcurementsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procurementsservice.remove(id);
  }
}