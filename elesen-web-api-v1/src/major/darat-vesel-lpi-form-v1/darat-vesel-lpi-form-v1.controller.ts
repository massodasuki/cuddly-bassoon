import { Controller, Get, Post, Body, Param, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { DaratVeselLpiFormV1Service } from './darat-vesel-lpi-form-v1.service';
import { DaratVeselLpiFormV1Entity } from './darat-vesel-lpi-form-v1.entity';
import { CreateDaratVeselLpiFormV1Dto } from './dto/create-darat-vesel-lpi-form-v1.dto';

@Controller('/api/v1/applications/darat-vesel-lpi-form-v1')
export class DaratVeselLpiFormV1Controller {
  constructor(private readonly daratVeselLpiFormV1Service: DaratVeselLpiFormV1Service) {}

  @Get()
  findAll(): Promise<DaratVeselLpiFormV1Entity[]> {
    return this.daratVeselLpiFormV1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<DaratVeselLpiFormV1Entity> {
    return this.daratVeselLpiFormV1Service.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateDaratVeselLpiFormV1Dto): Promise<DaratVeselLpiFormV1Entity> {
    return this.daratVeselLpiFormV1Service.create(createDto);
  }

  @Post('inspection')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'veselKeseluruhanImg_file', maxCount: 1 },
    { name: 'enjinImg_file', maxCount: 1 },
    { name: 'noEnjinImg_file', maxCount: 1 },
    { name: 'penandaEnjinImg_file', maxCount: 1 },
    { name: 'turboImg_file', maxCount: 1 },
    { name: 'generatorImg_file', maxCount: 1 },
    { name: 'tandaTanganPembantuImg_file', maxCount: 1 },
    { name: 'tandatanganPegawaiImg_file', maxCount: 1 },
    { name: 'tandaTanganEmpunyaVeselImg_file', maxCount: 1 }
  ]))
  createWithFiles(
    @Body() createDto: CreateDaratVeselLpiFormV1Dto,
    @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
  ): Promise<CreateDaratVeselLpiFormV1Dto> {
    return this.daratVeselLpiFormV1Service.createWithFiles(createDto, files);
  }
}