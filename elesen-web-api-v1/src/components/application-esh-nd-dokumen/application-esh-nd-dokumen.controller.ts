import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationEshNdDokumenService } from './application-esh-nd-dokumen.service';
import { CreateApplicationEshNdDokumenDto } from './dto/create-application-esh-nd-dokumen.dto';
import { UpdateApplicationEshNdDokumenDto } from './dto/update-application-esh-nd-dokumen.dto';

@Controller('application-esh-nd-dokumen')
export class ApplicationEshNdDokumenController {
  constructor(private readonly applicationEshNdDokumenService: ApplicationEshNdDokumenService) {}

  @Post()
  create(@Body() createApplicationEshNdDokumenDto: CreateApplicationEshNdDokumenDto) {
    return this.applicationEshNdDokumenService.create(createApplicationEshNdDokumenDto);
  }

  @Get()
  findAll() {
    return this.applicationEshNdDokumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationEshNdDokumenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationEshNdDokumenDto: UpdateApplicationEshNdDokumenDto) {
    return this.applicationEshNdDokumenService.update(id, updateApplicationEshNdDokumenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationEshNdDokumenService.remove(id);
  }
}
