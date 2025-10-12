import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationService } from './applications.service';
import { CreateApplicationEntityDto } from './dto/create-application.dto';
import { UpdateApplicationEntityDto } from './dto/update-application.dto';

@Controller('applications')
export class ApplicationEntityController {
  constructor(private readonly applicationsService: ApplicationService) {}

  @Post()
  create(@Body() createApplicationEntityDto: CreateApplicationEntityDto) {
    return this.applicationsService.create(createApplicationEntityDto);
  }

  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationEntityDto: UpdateApplicationEntityDto) {
    return this.applicationsService.update(id, updateApplicationEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationsService.remove(id);
  }
}