import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NelayanDaratCardsService } from './nelayan-darat-cards.service';
import { CreateNelayanDaratCardsDto } from './dto/create-nelayan-darat-cards.dto';
import { UpdateNelayanDaratCardsDto } from './dto/update-nelayan-darat-cards.dto';

@Controller('nelayan_darat_cards')
export class NelayanDaratCardsController {
  constructor(private readonly nelayandaratcardsservice: NelayanDaratCardsService) {}

  @Post()
  create(@Body() createNelayanDaratCardsDto: CreateNelayanDaratCardsDto) {
    return this.nelayandaratcardsservice.create(createNelayanDaratCardsDto);
  }

  @Get()
  findAll() {
    return this.nelayandaratcardsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nelayandaratcardsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.nelayandaratcardsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNelayanDaratCardsDto: UpdateNelayanDaratCardsDto) {
    return this.nelayandaratcardsservice.update(id, updateNelayanDaratCardsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nelayandaratcardsservice.remove(id);
  }
}