import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiNavigationsService } from './lpi-navigations.service';
import { CreateLpiNavigationsDto } from './dto/create-lpi-navigations.dto';
import { UpdateLpiNavigationsDto } from './dto/update-lpi-navigations.dto';

@Controller('lpi_navigations')
export class LpiNavigationsController {
  constructor(private readonly lpinavigationsservice: LpiNavigationsService) {}

  @Post()
  create(@Body() createLpiNavigationsDto: CreateLpiNavigationsDto) {
    return this.lpinavigationsservice.create(createLpiNavigationsDto);
  }

  @Get()
  findAll() {
    return this.lpinavigationsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpinavigationsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpinavigationsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiNavigationsDto: UpdateLpiNavigationsDto) {
    return this.lpinavigationsservice.update(id, updateLpiNavigationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpinavigationsservice.remove(id);
  }
}