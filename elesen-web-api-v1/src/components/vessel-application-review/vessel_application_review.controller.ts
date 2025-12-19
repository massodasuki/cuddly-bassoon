import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselApplicationReviewService } from './vessel_application_review.service';
import { CreateVesselApplicationReviewDto } from './dto/create-vessel_application_review.dto';
import { UpdateVesselApplicationReviewDto } from './dto/update-vessel_application_review.dto';

@Controller('vessel_application_review')
export class VesselApplicationReviewController {
  constructor(private readonly vesselapplicationreviewservice: VesselApplicationReviewService) {}

  @Post()
  create(@Body() createVesselApplicationReviewDto: CreateVesselApplicationReviewDto) {
    return this.vesselapplicationreviewservice.create(createVesselApplicationReviewDto);
  }

  @Get()
  findAll() {
    return this.vesselapplicationreviewservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vesselapplicationreviewservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vesselapplicationreviewservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselApplicationReviewDto: UpdateVesselApplicationReviewDto) {
    return this.vesselapplicationreviewservice.update(id, updateVesselApplicationReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vesselapplicationreviewservice.remove(id);
  }
}