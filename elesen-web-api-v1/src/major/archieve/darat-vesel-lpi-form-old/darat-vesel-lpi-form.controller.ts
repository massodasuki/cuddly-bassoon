import { Controller, Get, Post, Body, Param, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { DaratVeselLpiFormService } from './darat-vesel-lpi-form.service';
import { DaratVeselLpiFormEntity } from './darat-vesel-lpi-form.entity';
import { CreateDaratVeselLpiFormDto } from './dto/create-darat-vesel-lpi-form.dto';

@Controller('/api/v1/applications/darat-vesel-lpi-form-old')
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
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'enjinImg', maxCount: 1 },
    { name: 'noEnjinImg', maxCount: 1 },
    { name: 'penandaEnjinImg', maxCount: 1 },
    { name: 'turboImg', maxCount: 1 },
    { name: 'generatorImg', maxCount: 1 },
    { name: 'veselKiriImg', maxCount: 1 },
    { name: 'veselKananImg', maxCount: 1 },
    { name: 'veselHadapanImg', maxCount: 1 },
    { name: 'veselBelakangImg', maxCount: 1 },
    { name: 'veselKeseluruhanImg', maxCount: 1 },
    { name: 'MTUImg', maxCount: 1 },
    { name: 'AISImg', maxCount: 1 },
    { name: 'tandaTanganPembantuImg', maxCount: 1 },
    { name: 'tandatanganPegawaiImg', maxCount: 1 },
    { name: 'tandaTanganEmpunyaVeselImg', maxCount: 1 }
  ]))
  createWithFiles(
    @Body() createDto: CreateDaratVeselLpiFormDto,
    @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
  ): Promise<CreateDaratVeselLpiFormDto> {
    return this.daratVeselLpiFormService.createWithFiles(createDto, files);
  }
}
