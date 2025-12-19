import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FishermanMeritsService } from './fisherman_merits.service';
import { CreateFishermanMeritsDto } from './dto/create-fisherman_merits.dto';
import { UpdateFishermanMeritsDto } from './dto/update-fisherman_merits.dto';

@Controller('fisherman_merits')
export class FishermanMeritsController {
  constructor(private readonly fishermanmeritsservice: FishermanMeritsService) {}

  @Post()
  create(@Body() createFishermanMeritsDto: CreateFishermanMeritsDto) {
    return this.fishermanmeritsservice.create(createFishermanMeritsDto);
  }

  @Get()
  findAll() {
    return this.fishermanmeritsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fishermanmeritsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.fishermanmeritsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFishermanMeritsDto: UpdateFishermanMeritsDto) {
    return this.fishermanmeritsservice.update(id, updateFishermanMeritsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fishermanmeritsservice.remove(id);
  }
}