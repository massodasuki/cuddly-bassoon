import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpPt01ReviewsService } from './pp-pt-01-reviews.service';
import { CreatePpPt01ReviewsDto } from './dto/create-pp-pt-01-reviews.dto';
import { UpdatePpPt01ReviewsDto } from './dto/update-pp-pt-01-reviews.dto';

@Controller('pp_pt_01_reviews')
export class PpPt01ReviewsController {
  constructor(private readonly pppt01reviewsservice: PpPt01ReviewsService) {}

  @Post()
  create(@Body() createPpPt01ReviewsDto: CreatePpPt01ReviewsDto) {
    return this.pppt01reviewsservice.create(createPpPt01ReviewsDto);
  }

  @Get()
  findAll() {
    return this.pppt01reviewsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pppt01reviewsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.pppt01reviewsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpPt01ReviewsDto: UpdatePpPt01ReviewsDto) {
    return this.pppt01reviewsservice.update(id, updatePpPt01ReviewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pppt01reviewsservice.remove(id);
  }
}