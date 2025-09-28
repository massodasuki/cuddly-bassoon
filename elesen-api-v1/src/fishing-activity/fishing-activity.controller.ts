import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FishingActivityService } from './fishing-activity.service';
import { CreateFishingActivityDto } from './dto/create-fishing-activity.dto';
import { UpdateFishingActivityDto } from './dto/update-fishing-activity.dto';
import { FishingActivity } from './entities/fishing-activity.entity';

@ApiTags('fishing-activity')
@Controller('/api/v1/applications/fishing-activity')
export class FishingActivityController {
  constructor(private readonly fishingActivityService: FishingActivityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new fishing activity record' })
  @ApiResponse({ status: 201, description: 'The fishing activity record has been successfully created.', type: FishingActivity })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createFishingActivityDto: CreateFishingActivityDto): Promise<FishingActivity> {
    return this.fishingActivityService.create(createFishingActivityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all fishing activity records' })
  @ApiResponse({ status: 200, description: 'List of fishing activity records.', type: [FishingActivity] })
  findAll(): Promise<FishingActivity[]> {
    return this.fishingActivityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a fishing activity record by ID' })
  @ApiResponse({ status: 200, description: 'The fishing activity record.', type: FishingActivity })
  @ApiResponse({ status: 404, description: 'Fishing activity record not found.' })
  findOne(@Param('id') id: string): Promise<FishingActivity> {
    return this.fishingActivityService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a fishing activity record' })
  @ApiResponse({ status: 200, description: 'The fishing activity record has been successfully updated.', type: FishingActivity })
  @ApiResponse({ status: 404, description: 'Fishing activity record not found.' })
  update(@Param('id') id: string, @Body() updateFishingActivityDto: UpdateFishingActivityDto): Promise<FishingActivity> {
    return this.fishingActivityService.update(id, updateFishingActivityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a fishing activity record' })
  @ApiResponse({ status: 200, description: 'The fishing activity record has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Fishing activity record not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.fishingActivityService.remove(id);
  }
}