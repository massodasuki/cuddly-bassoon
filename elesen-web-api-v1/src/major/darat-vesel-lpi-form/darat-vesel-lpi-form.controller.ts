import { Controller, Get, Post, Body, Param, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { CreateDaratVeselLpiFormDto } from './dto/create-darat-vesel-lpi-form.dto';

@Controller('/api/v1/applications/darat-vesel-lpi-form')
export class DaratVeselLpiFormController {
  constructor(private readonly daratVeselLpiFormService: DaratVeselLpiFormService) {}

  @Get()
  findAll(): Promise<DaratVeselLpiFormEntity[]> {
    return this.daratVeselLpiFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVeselLpiFormEntity> {
    return this.daratVeselLpiFormService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateDaratVeselLpiFormDto): Promise<DaratVeselLpiFormEntity> {
    return this.daratVeselLpiFormService.create(createDto);
  }

  @Post('inspection')
  @UseInterceptors(FilesInterceptor('files'))
  createWithFiles(
    @Body() createDto: CreateDaratVeselLpiFormDto,
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<CreateDaratVeselLpiFormDto> {
    return this.daratVeselLpiFormService.createWithFiles(createDto, files);
  }
}