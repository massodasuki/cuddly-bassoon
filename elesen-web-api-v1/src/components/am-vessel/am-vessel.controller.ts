import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AmVesselService } from './am-vessel.service';
import { CreateAmVesselDto } from './dto/create-am-vessel.dto';
import { UpdateAmVesselDto } from './dto/update-am-vessel.dto';

@Controller('am-vessel')
export class AmVesselController {
  constructor(private readonly amVesselService: AmVesselService) {}

  @Post()
  create(@Body() createAmVesselDto: CreateAmVesselDto) {
    return this.amVesselService.create(createAmVesselDto);
  }

  @Get()
  findAll() {
    return this.amVesselService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.amVesselService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAmVesselDto: UpdateAmVesselDto) {
    return this.amVesselService.update(id, updateAmVesselDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.amVesselService.remove(id);
  }
}
