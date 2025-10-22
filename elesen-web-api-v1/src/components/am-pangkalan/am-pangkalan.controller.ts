import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AmPangkalanService } from './am-pangkalan.service';
import { CreateAmPangkalanDto } from './dto/create-am-pangkalan.dto';
import { UpdateAmPangkalanDto } from './dto/update-am-pangkalan.dto';

@Controller('am-pangkalan')
export class AmPangkalanController {
  constructor(private readonly amPangkalanService: AmPangkalanService) {}

  @Post()
  create(@Body() createAmPangkalanDto: CreateAmPangkalanDto) {
    return this.amPangkalanService.create(createAmPangkalanDto);
  }

  @Get()
  findAll() {
    return this.amPangkalanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.amPangkalanService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAmPangkalanDto: UpdateAmPangkalanDto) {
    return this.amPangkalanService.update(id, updateAmPangkalanDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.amPangkalanService.remove(id);
  }
}