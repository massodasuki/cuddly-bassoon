import { Controller, Post, UseInterceptors, Body, Req, Res } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BorangLPIService } from './borang-lpi.service';
import { CreateBorangLPIDto } from './dto/create-borang-lpi.dto';

@ApiTags('Borang LPI')
@Controller('api/borang-lpi')
export class BorangLPIController {
  constructor(private readonly borangLPIService: BorangLPIService) {}

  @Post()
  @ApiOperation({ summary: 'Create Borang LPI' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Borang LPI form data with images. Send as multipart/form-data with JSON fields and file uploads.',
    schema: {
      type: 'object',
      properties: {
        noPendaftaranVesel: {
          type: 'string',
          description: 'JSON string of noPendaftaranVesel object',
          example: '{"diTebuk": false, "diCat": true}'
        },
        tandaPenukulBesi: {
          type: 'string',
          description: 'JSON string of tandaPenukulBesi object',
          example: '{"tandaBahagianLaluan": false, "hurufKodTanda": null}'
        },
        tinPlate: {
          type: 'string',
          description: 'JSON string of tinPlate object',
          example: '{"tinPlate": true, "noTinePlate": "AVBC"}'
        },
        pakuPenandaLebar: {
          type: 'string',
          description: 'Boolean as string',
          example: 'true'
        },
        rumahKemudi: {
          type: 'string',
          description: 'JSON string of rumahKemudi object',
          example: '{"diCat": true, "kodZon": "ASdSA", "diBumbung": true}'
        },
        pukatTundaBerlesen: {
          type: 'string',
          description: 'JSON string of pukatTundaBerlesen object',
          example: '{"jalurPutih": true, "diCat": true}'
        },
        ukuranDimensiVesel: {
          type: 'string',
          description: 'JSON string of ukuranDimensiVesel object',
          example: '{"panjangMeter": {"dalamLesen": 1, "semasaDiperiksa": 1}, "lebarMeter": {"dalamLesen": 1, "semasaDiperiksa": 1}, "kedalamanMeter": {"dalamLesen": 1, "semasaDiperiksa": 1}, "muatanGRT": {"dalamLesen": 1, "semasaDiperiksa": 1}, "image": {"veselKiriImg": "https://dof.gov/abcg.png", "veselKananImg": "https://dof.gov/abcg.png", "veselHadapanImg": "https://dof.gov/abcg.png", "veselBelakangImg": "https://dof.gov/abcg.png", "veselKeseluruhanImg": "https://dof.gov/abcg.png"}}'
        },
        enjin: {
          type: 'string',
          description: 'JSON string of enjin object',
          example: '{"maklumatEnjin": {"jenama": "Yamaha", "model": "X200", "turbo": null, "kuasaKuda": 60, "noEnjin": "EJ65978", "penandaVesel": "07-05-2025"}, "image": {"enjinImg": "https://dof.gov/abcg.png", "noEnjinImg": "https://dof.gov/abcg.png", "penandaEnjinImg": "https://dof.gov/abcg.png", "turboImg": "https://dof.gov/abcg.png", "generatorImg": "https://dof.gov/abcg.png"}}'
        },
        peralatanKeselamatan: {
          type: 'string',
          description: 'JSON string of peralatanKeselamatan object',
          example: '{"jaketKeselamatan": {"status": "Tiada", "kuantiti": "Tiada", "keadaan": "Baik"}, "boyaKeselamatan": {"status": "Tiada", "kuantiti": "Tiada", "keadaan": "Baik"}, "alatPemadamApi": {"status": "Tiada", "kuantiti": "Tiada", "keadaan": "Baik"}, "rakitKeselamatan": {"status": "Tiada", "kuantiti": "Tiada", "keadaan": "Baik"}, "radioWireless": {"status": "Tiada", "kuantiti": "Tiada", "keadaan": "Baik"}, "image": {"MTUImg": "https://dof.gov/abcg.png", "AISImg": "https://dof.gov/abcg.png"}}'
        },
        kelengkapanMenangkapIkan: {
          type: 'string',
          description: 'JSON string of kelengkapanMenangkapIkan object',
          example: '{"GPS": true, "echoSounder": false, "radar": true, "satNavigation": true, "sonar": false, "fishFinder": true, "radioWireless": true, "ATUR": true, "netHouler": false, "powerBlock": false, "netDrum": false, "petakIkan": false, "RSW": false, "CCTV": true}'
        },
        peralatan: {
          type: 'string',
          description: 'JSON string array of peralatan objects',
          example: '[{"nama": "Bubu", "jenisPeralatan": "Utama", "panjangMeter": 1, "tarikDilesen": "2023-03-27", "status": "aktif"}, {"nama": "Bubu", "jenisPeralatan": "Tambahan", "panjangMeter": 1, "tarikDilesen": "2023-03-27", "status": "aktif"}]'
        },
        saizMataPukatTunda: {
          type: 'string',
          description: 'String value',
          example: ''
        },
        jenisPeralatanSemasa: {
          type: 'string',
          description: 'String value',
          example: 'Bubu'
        },
        keadaanVesel: {
          type: 'string',
          description: 'JSON string of keadaanVesel object',
          example: '{"keadaanSemasa": "Baik", "vesel": "Asal/Bukan Vesel", "jenisKulit": "", "veselBaharu": false}'
        },
        tarikhPemeriksaan: {
          type: 'string',
          description: 'Date string',
          example: '2023-01-27'
        },
        perakuanPegawai: {
          type: 'string',
          description: 'JSON string of perakuanPegawai object',
          example: '{"diSokong": true, "tarikhPemeriksaan": "2023-01-27", "image": {"tandaTanganPembantuImg": "", "tandatanganPegawaiImg": ""}}'
        },
        perakuanEmpunyaVesel: {
          type: 'string',
          description: 'JSON string of perakuanEmpunyaVesel object',
          example: '{"jenisPermohonan": "Pendaftaran Baru", "tarikhPemeriksaan": "2023-01-27", "image": {"tandaTanganEmpunyaVeselImg": ""}}'
        },
        // File upload fields
        veselKiriImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for vessel left side'
        },
        veselKananImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for vessel right side'
        },
        veselHadapanImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for vessel front'
        },
        veselBelakangImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for vessel back'
        },
        veselkeseluruhanImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for vessel overall'
        },
        enjinImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for engine'
        },
        noEnjinImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for engine number'
        },
        penandaEnjinImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for engine marker'
        },
        turboImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for turbo'
        },
        generatorImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for generator'
        },
        MTUImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for MTU'
        },
        AISImg: {
          type: 'string',
          format: 'binary',
          description: 'Image file for AIS'
        },
        tandaTanganPembantuImg: {
          type: 'string',
          format: 'binary',
          description: 'Signature image for assistant officer'
        },
        tandatanganPegawaiImg: {
          type: 'string',
          format: 'binary',
          description: 'Signature image for officer'
        },
        tandaTanganEmpunyaVeselImg: {
          type: 'string',
          format: 'binary',
          description: 'Signature image for vessel owner'
        }
      },
      required: ['noPendaftaranVesel', 'tandaPenukulBesi', 'tinPlate', 'pakuPenandaLebar', 'rumahKemudi', 'pukatTundaBerlesen', 'ukuranDimensiVesel', 'enjin', 'peralatanKeselamatan', 'kelengkapanMenangkapIkan', 'peralatan', 'jenisPeralatanSemasa', 'keadaanVesel', 'tarikhPemeriksaan', 'perakuanPegawai', 'perakuanEmpunyaVesel']
    }
  })
  @UseInterceptors(AnyFilesInterceptor())
  async create(@Body() body: CreateBorangLPIDto, @Req() req, @Res() res) {
    const uploadedFiles = req.files || [];
    return this.borangLPIService.createBorangLPI(body, uploadedFiles, res);
  }
}