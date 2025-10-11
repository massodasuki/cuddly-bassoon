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
    description: 'Borang LPI form data with images',
    type: CreateBorangLPIDto,
    examples: {
      example1: {
        summary: 'Sample Borang LPI Request',
        value: {
          noPendaftaranVesel: {
            diTebuk: false,
            diCat: true
          },
          tandaPenukulBesi: {
            tandaBahagianLaluan: false,
            hurufKodTanda: null
          },
          tinPlate: {
            tinPlate: true,
            noTinePlate: "AVBC"
          },
          pakuPenandaLebar: true,
          rumahKemudi: {
            diCat: true,
            kodZon: "ASdSA",
            diBumbung: true
          },
          pukatTundaBerlesen: {
            jalurPutih: true,
            diCat: true
          },
          ukuranDimensiVesel: {
            panjangMeter: {
              dalamLesen: 1,
              semasaDiperiksa: 1
            },
            lebarMeter: {
              dalamLesen: 1,
              semasaDiperiksa: 1
            },
            kedalamanMeter: {
              dalamLesen: 1,
              semasaDiperiksa: 1
            },
            muatanGRT: {
              dalamLesen: 1,
              semasaDiperiksa: 1
            },
            image: {
              kiri: "https://dof.gov/abcg.png",
              kanan: "https://dof.gov/abcg.png",
              hadapan: "https://dof.gov/abcg.png",
              belakang: "https://dof.gov/abcg.png",
              keseluruhan: "https://dof.gov/abcg.png"
            }
          },
          enjin: {
            maklumatEnjin: {
              jenama: "Yamaha",
              model: "X200",
              turbo: null,
              kuasaKuda: 60,
              noEnjin: "EJ65978",
              penandaVesel: "07-05-2025"
            },
            image: {
              enjinUrl: "https://dof.gov/abcg.png",
              noEnjinUrl: "https://dof.gov/abcg.png",
              penandaEnjinUrl: "https://dof.gov/abcg.png",
              turboUrl: "https://dof.gov/abcg.png",
              generatorUrl: "https://dof.gov/abcg.png"
            }
          },
          peralatanKeselamatan: {
            jaketKeselamatan: {
              status: "Tiada",
              kuantiti: "Tiada",
              keadaan: "Baik"
            },
            boyaKeselamatan: {
              status: "Tiada",
              kuantiti: "Tiada",
              keadaan: "Baik"
            },
            alatPemadamApi: {
              status: "Tiada",
              kuantiti: "Tiada",
              keadaan: "Baik"
            },
            rakitKeselamatan: {
              status: "Tiada",
              kuantiti: "Tiada",
              keadaan: "Baik"
            },
            radioWireless: {
              status: "Tiada",
              kuantiti: "Tiada",
              keadaan: "Baik"
            },
            image: {
              MTUUrl: "https://dof.gov/abcg.png",
              AISUrl: "https://dof.gov/abcg.png"
            }
          },
          kelengkapanMenangkapIkan: {
            GPS: true,
            echoSounder: false,
            radar: true,
            satNavigation: true,
            sonar: false,
            fishFinder: true,
            radioWireless: true,
            ATUR: true,
            netHouler: false,
            powerBlock: false,
            netDrum: false,
            petakIkan: false,
            RSW: false,
            CCTV: true
          },
          peralatan: [
            {
              nama: "Bubu",
              jenisPeralatan: "Utama",
              panjangMeter: 1,
              tarikDilesen: "2023-03-27",
              status: "aktif"
            },
            {
              nama: "Bubu",
              jenisPeralatan: "Tambahan",
              panjangMeter: 1,
              tarikDilesen: "2023-03-27",
              status: "aktif"
            }
          ],
          saizMataPukatTunda: "",
          jenisPeralatanSemasa: "Bubu",
          keadaanVesel: {
            keadaanSemasa: "Baik",
            vesel: "Asal/Bukan Vesel",
            jenisKulit: "",
            veselBaharu: false
          },
          tarikhPemeriksaan: "2023-01-27",
          perakuanPegawai: {
            diSokong: true,
            tarikhPemeriksaan: "2023-01-27",
            image: {
              tandaTanganPembantuImg: "https://dof.gov/abcg.png",
              tandatanganPegawaiImg: "https://dof.gov/abcg.png"
            }
          },
          perakuanEmpunyaVesel: {
            jenisPermohonan: "Pendaftaran Baru",
            tarikhPemeriksaan: "2023-01-27",
            image: {
              tandaTanganEmpunyaVeselImg: "https://dof.gov/abcg.png"
            }
          }
        }
      }
    }
  })
  @UseInterceptors(AnyFilesInterceptor())
  async create(@Body() body: CreateBorangLPIDto, @Req() req, @Res() res) {
    const uploadedFiles = req.files || [];
    return this.borangLPIService.createBorangLPI(body, uploadedFiles, res);
  }
}