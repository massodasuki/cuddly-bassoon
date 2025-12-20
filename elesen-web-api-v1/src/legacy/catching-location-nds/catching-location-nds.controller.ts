import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatchingLocationNdsService } from './catching-location-nds.service';
import { CreateCatchingLocationNdDto } from './dto/create-catching-location-nd.dto';
import { UpdateCatchingLocationNdDto } from './dto/update-catching-location-nd.dto';

@Controller('catching-location-nds')
export class CatchingLocationNdsController {
  constructor(private readonly catchingLocationNdsService: CatchingLocationNdsService) {}

  @Post()
  create(@Body() createCatchingLocationNdDto: CreateCatchingLocationNdDto) {
    return this.catchingLocationNdsService.create(createCatchingLocationNdDto);
  }

  @Get()
  findAll() {
    return this.catchingLocationNdsService.findAll();
  }

  @Get(':catching_location_id')
  findOne(@Param('catching_location_id') catching_location_id: string) {
    return this.catchingLocationNdsService.findOne(catching_location_id);
  }

  @Patch(':catching_location_id')
  update(@Param('catching_location_id') catching_location_id: string, @Body() updateCatchingLocationNdDto: UpdateCatchingLocationNdDto) {
    return this.catchingLocationNdsService.update(catching_location_id, updateCatchingLocationNdDto);
  }

  @Delete(':catching_location_id')
  remove(@Param('catching_location_id') catching_location_id: string) {
    return this.catchingLocationNdsService.remove(catching_location_id);
  }
}
