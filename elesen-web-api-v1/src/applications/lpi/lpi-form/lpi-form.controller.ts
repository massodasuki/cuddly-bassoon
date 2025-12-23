import { Controller, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { LpiFormService } from './lpi-form.service';
import { CreateLpiFormDto } from './dto/create-lpi-form.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/api/v1/applications/lpi-form')
export class LpiFormController {
  constructor(private readonly lpiFormService: LpiFormService) {}

  @Post()
  create(@Body() createLpiFormDto: CreateLpiFormDto) {
    return this.lpiFormService.createLpiForm(createLpiFormDto);
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
    @Body() createDto: CreateLpiFormDto,
    @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
    ): Promise<CreateLpiFormDto> {
    return this.lpiFormService.createWithFiles(createDto, files);
    }
  
  
}