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
   { name: 'generatorImg', maxCount: 1 },
   { name: 'veselKiriImg', maxCount: 1 },
   { name: 'veselKananImg', maxCount: 1 },
   { name: 'veselHadapanImg', maxCount: 1 },
   { name: 'veselBelakangImg', maxCount: 1 },
   { name: 'veselKeseluruhanImg', maxCount: 1 },
   { name: 'MTUImg', maxCount: 1 },
   { name: 'AISImg', maxCount: 1 },
   { name: 'pemeriksaanImg_borangKehadiran', maxCount: 1 },
   { name: 'veselImg_keseluruhan', maxCount: 1 },
   { name: 'pemeriksaanImg_PemeriksaDanPemilik', maxCount: 1 },
   { name: 'QRImg', maxCount: 1 },
   { name: 'veselImg_kiri', maxCount: 1 },
   { name: 'veselImg_kanan', maxCount: 1 },
   { name: 'veselImg_depan', maxCount: 1 },
   { name: 'veselImg_hadapan', maxCount: 1 },
   { name: 'generatorImg_tambahan', maxCount: 1 },
   { name: 'enjinImg_semasaDiperiksa', maxCount: 1 },
   { name: 'enjinNomborImg_semasaDiperiksa', maxCount: 1 },
   { name: 'enjinNomborPEVImg_semasaDiperiksa', maxCount: 1 },
   { name: 'enjinTurboImg_semasaDiperiksa', maxCount: 1 },
   { name: 'enjinImg_tambahan', maxCount: 1 },
   { name: 'enjinNomborImg_tambahan', maxCount: 1 },
   { name: 'enjinNomborPEVImg_tambahan', maxCount: 1 },
   { name: 'enjinTurboImg_tambahan', maxCount: 1 },
   { name: 'jaketKeselamatanImg', maxCount: 1 },
   { name: 'alatPemadamApiImg', maxCount: 1 },
   { name: 'rakitKeselamatanImg', maxCount: 1 },
   { name: 'lampuPelayaranImg', maxCount: 1 },
   { name: 'mtuImg', maxCount: 1 },
   { name: 'aisImg', maxCount: 1 },
   { name: 'emsImg', maxCount: 1 },
   { name: 'pemeriksaanImg_veselKeseluruhan', maxCount: 1 },

   
   { name: 'turboImg', maxCount: 1 },
   { name: 'tandaTanganPembantuImg', maxCount: 1 },
   { name: 'tandatanganPegawaiImg', maxCount: 1 },
   { name: 'tandaTanganEmpunyaVeselImg', maxCount: 1 },
   { name: 'enjinImg', maxCount: 1 },
   { name: 'noEnjinImg', maxCount: 1 },
   { name: 'penandaEnjinImg', maxCount: 1 },
   ]))
    createWithFiles(
    @Body() createDto: CreateLpiFormDto,
    @UploadedFiles() files: { [key: string]: Express.Multer.File[] },
    ): Promise<CreateLpiFormDto> {
    return this.lpiFormService.createWithFiles(createDto, files);
    }
  
  
}