import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FullInspectionLpisService } from './full-inspection-lpis.service';
import { CreateFullInspectionLpisDto } from './dto/create-full-inspection-lpis.dto';
import { UpdateFullInspectionLpisDto } from './dto/update-full-inspection-lpis.dto';

@Controller('full_inspection_lpis')
export class FullInspectionLpisController {
  constructor(private readonly fullinspectionlpisservice: FullInspectionLpisService) {}

  @Post()
  create(@Body() createFullInspectionLpisDto: CreateFullInspectionLpisDto) {
    return this.fullinspectionlpisservice.create(createFullInspectionLpisDto);
  }

  @Get()
  findAll() {
    return this.fullinspectionlpisservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fullinspectionlpisservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.fullinspectionlpisservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFullInspectionLpisDto: UpdateFullInspectionLpisDto) {
    return this.fullinspectionlpisservice.update(id, updateFullInspectionLpisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fullinspectionlpisservice.remove(id);
  }
}