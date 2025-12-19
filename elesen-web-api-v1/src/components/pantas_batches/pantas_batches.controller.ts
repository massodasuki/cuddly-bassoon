import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PantasBatchesService } from './pantas_batches.service';
import { CreatePantasBatchesDto } from './dto/create-pantas_batches.dto';
import { UpdatePantasBatchesDto } from './dto/update-pantas_batches.dto';

@Controller('pantas_batches')
export class PantasBatchesController {
  constructor(private readonly pantasbatchesservice: PantasBatchesService) {}

  @Post()
  create(@Body() createPantasBatchesDto: CreatePantasBatchesDto) {
    return this.pantasbatchesservice.create(createPantasBatchesDto);
  }

  @Get()
  findAll() {
    return this.pantasbatchesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pantasbatchesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pantasbatchesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePantasBatchesDto: UpdatePantasBatchesDto) {
    return this.pantasbatchesservice.update(id, updatePantasBatchesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pantasbatchesservice.remove(id);
  }
}