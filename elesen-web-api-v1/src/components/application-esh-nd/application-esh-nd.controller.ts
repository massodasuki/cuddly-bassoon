import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationEshNdService } from './application-esh-nd.service';
import { CreateApplicationEshNdDto } from './dto/create-application-esh-nd.dto';
import { UpdateApplicationEshNdDto } from './dto/update-application-esh-nd.dto';

@Controller('application-esh-nd')
export class ApplicationEshNdController {
  constructor(private readonly applicationEshNdService: ApplicationEshNdService) {}

  @Post()
  create(@Body() createApplicationEshNdDto: CreateApplicationEshNdDto) {
    return this.applicationEshNdService.create(createApplicationEshNdDto);
  }

  @Get()
  findAll() {
    return this.applicationEshNdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationEshNdService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationEshNdDto: UpdateApplicationEshNdDto) {
    return this.applicationEshNdService.update(id, updateApplicationEshNdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationEshNdService.remove(id);
  }
}