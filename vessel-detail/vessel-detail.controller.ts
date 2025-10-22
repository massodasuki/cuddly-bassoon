import { Controller, Get, Param } from '@nestjs/common';
import { VesselDetailService } from './vessel-detail.service';
import { VesselDetailResponseDto } from './dto/vessel-detail-response.dto';
import { ApiTags, ApiResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

@ApiTags('VesselDetail')
@Controller('/api/v1/applications/vesel')
export class VesselDetailController {
  constructor(private readonly vesselDetailService: VesselDetailService) {}

  @Get()
  @ApiResponse({ status: 200, type: VesselDetailResponseDto })
  async getVesselDetail(): Promise<VesselDetailResponseDto> {
    return await this.vesselDetailService.getVesselDetail();
  }

  @Get('detail/:id')
  @ApiOperation({ summary: 'Get vessel detail by ID' })
  @ApiParam({ name: 'id', description: 'Vessel ID' })
  @ApiResponse({
    status: 200,
    description: 'Vessel detail data',
    type: VesselDetailResponseDto,
    schema: {
      example: {
        data: [
          {
            profilVesel: {
              maklumatAmVesel: {
                noPendaftaranVesel: 'TRF1234',
                noGeran: null,
                noPatilKekal: 'P123',
                tarikhDaftar: '2023-03-27',
                lokasiPembinaanVesel: 'Pelabuhan A',
                negaraAsal: 'Malaysia',
                pemasanganMTU: true,
                noPendaftaranMTU: null,
                hakMilik: 'Persendirian',
                kodRFIDQR: 'RFID0001',
                pengkalanUtama: true,
                pelabuhanUtama: 'Pelabuhan Utama',
                pelabuhanTambahan: 'Pelabuhan sekunder',
              },
              lesen: {
                noLesen: 'L001',
                tarikhMula: '2023-03-27',
                tarikhTamat: '2025-03-27',
                zon: 'A1',
                noPatil: 'P123',
                status: 'aktif',
                statusIUUU: 'Tidak Aktif',
              },
              kulit: {
                tarikhDilesen: '2023-03-27',
                panjangMeter: 20,
                lebarMeter: 5,
                kedalamanMeter: 3,
                muatanGRT: 54.1,
                status: 'Tidak Aktif',
                tindakan: null,
              },
              enjin: {
                maklumatAmEnjin: {
                  jenisEnjin: 'Sangkut',
                  bahanApi: 'Diesel',
                  jenamaEnjin: 'Yamaha',
                  kuasaKuda: 60,
                  noEnjin: 'EJ1234',
                  model: 'X200',
                  turbo: 'Tiada',
                  tarikhPEV: '2023-03-27',
                  kategoriEnjin: 'Tambahan',
                  status: 'aktif',
                },
                gambar: {
                  enjinUrl: 'https//dof.gov/abcg.png',
                  noEnjinUrl: 'https//dof.gov/abcg.png',
                  penandaPEVUrl: 'https//dof.gov/abcg.png',
                  turboUrl: 'https//dof.gov/abcg.png',
                  generatorUrl: 'https//dof.gov/abcg.png',
                },
              },
              peralatan: [
                {
                  nama: 'Bubu',
                  jenisPeralatan: 'Utama',
                  panjangMeter: 1,
                  tarikDilesen: '2023-03-27',
                  status: 'aktif',
                },
              ],
              kru: [
                {
                  noKadPendaftaran: 'NP-20224012131',
                  nama: 'Ali Bin Hassan',
                  negara: 'MALAYSIA',
                  noKadPengenalan: '93015148774',
                  jawatan: 'Pembantu Nelayan',
                },
                {
                  noKadPendaftaran: 'NP-20224012131',
                  nama: 'Ali Bin Hassan',
                  negara: 'MALAYSIA',
                  noKadPengenalan: '93015148774',
                  jawatan: 'Pembantu Nelayan',
                },
              ],
              pengkalan: [
                {
                  noRujukanPengkalan: 'REQ-001',
                  namaPengkalan: 'Pelabuhan A',
                  jenisPengkalan: 'Utama',
                  district: 'Klang',
                  state: 'Selangor',
                  tahunMula: '2023-01-30',
                  status: 'Aktif',
                },
                {
                  noRujukanPengkalan: 'REQ-001',
                  namaPengkalan: 'Pelabuhan A',
                  jenisPengkalan: 'Utama',
                  district: 'Klang',
                  state: 'Selangor',
                  tahunMula: '2023-01-30',
                  status: 'Aktif',
                },
              ],
              pemilikan: {
                namaPemilik: 'Ahmad bin Sabu',
                noKadPengenalan: '75015148774',
                jenisPemilikan: 'Individu',
                district: 'Klang',
                state: 'Selangor',
                tarikhPemilikan: '2023-01-30',
                status: 'Aktif',
              },
              pematuhan: {
                maklumatVesel: {
                  pakuPenandaLebar: null,
                  rumahKemudi: {
                    diCatBetul: true,
                    diCatTerang: false,
                    kodZon: null,
                    diAtasBumbung: false,
                  },
                  tandaPenukulBesi: {
                    tandaBahagianLaluan: false,
                    hurufKodTanda: null,
                  },
                  noPendaftaranVesel: {
                    diTebuk: false,
                    diCat: true,
                  },
                  QRCode: {
                    diPasang: false,
                    gambar: 'https//dof.gov/abcg.png',
                  },
                  ukuranDimensiVesel: {
                    panjangMeter: 1,
                    lebarMeter: 1,
                    kedalamanMeter: 1,
                    muatanGRT: 1,
                  },
                  ukuranGeometriVesel: {
                    a: null,
                    b: null,
                    c: null,
                    d: null,
                    e: null,
                    f: null,
                  },
                  gambar: {
                    kiri: 'https//dof.gov/abcg.png',
                    kanan: 'https//dof.gov/abcg.png',
                    hadapan: 'https//dof.gov/abcg.png',
                    belakang: 'https//dof.gov/abcg.png',
                    keseluruhan: 'https//dof.gov/abcg.png',
                  },
                },
                enjin: {
                  maklumatEnjin: {
                    jenama: 'Yamaha',
                    model: 'X200',
                    turbo: null,
                    kuasaKuda: 60,
                    noEnjin: 'EJ65978',
                    penandaVesel: '07-05-2025',
                  },
                  gambar: {
                    enjinUrl: 'https//dof.gov/abcg.png',
                    noEnjinUrl: 'https//dof.gov/abcg.png',
                    penandaEnjinUrl: 'https//dof.gov/abcg.png',
                    turboUrl: 'https//dof.gov/abcg.png',
                    generatorUrl: 'https//dof.gov/abcg.png',
                  },
                },
                peralatanPelayaran: {
                  lampuPelayaran: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  MTU: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  AIS: {
                    status: 'Ada',
                    keadaan: 'Baik',
                  },
                  CCTV: {
                    status: 'Ada',
                    keadaan: 'Baik',
                  },
                  GPS: {
                    status: 'Tiada',
                  },
                  gambar: {
                    MTUUrl: 'https//dof.gov/abcg.png',
                    AISUrl: 'https//dof.gov/abcg.png',
                    lampuPelayaranUrl: 'https//dof.gov/abcg.png',
                    QRCodeUrl: 'https//dof.gov/abcg.png',
                  },
                },
                peralatanKeselamatan: {
                  jaketKeselamatan: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  boyaKeselamatan: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  alatPemadamApi: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  rakitKeselamatan: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  radioWireless: {
                    status: 'Tiada',
                    kuantiti: 'Tiada',
                    keadaan: 'Tiada',
                  },
                  gambar: {
                    MTUUrl: 'https//dof.gov/abcg.png',
                    AISUrl: 'https//dof.gov/abcg.png',
                  },
                },
                kelengkapanMenangkapIkan: {
                  echoSounder: false,
                  sonar: false,
                  netHouler: false,
                  powerBlock: false,
                  petakIkan: false,
                  RSW: false,
                },
                dokumen: {
                  generalAgreementUrl: 'https//dof.gov/abcg.png',
                  vesselMarkingUrl: 'https//dof.gov/abcg.png',
                  laporanPemeriksaanKejuruteraanUrl: 'https//dof.gov/abcg.png',
                  laporanPemeriksaanSurveyorUrl: 'https//dof.gov/abcg.png',
                  certOfRegistrationUrl: 'https//dof.gov/abcg.png',
                  gearMakingUrl: 'https//dof.gov/abcg.png',
                  hygeineOnBoardUrl: 'https//dof.gov/abcg.png',
                  internationalOilPollutionPreventionCertUrl: 'https//dof.gov/abcg.png',
                  internationalTonnageCertUrl: 'https//dof.gov/abcg.png',
                  sijilKompetensiKakitanganUrl: 'https//dof.gov/abcg.png',
                  sijilPeralatanKeselmatanUrl: 'https//dof.gov/abcg.png',
                },
              },
              kesalahan: {
                nama: 'Ali Bin Hassan',
                noKadPengenalan: '93015148774',
                akta: 'Akta Perikanan 1985',
                seksyen: 'Seksyen 15',
                kesalahan: 'Memancing di kawasan larangan',
                tarikh: '2025-03-26',
                keputusan: 'Denda RM500',
              },
              pendaftaranAntarabangsa: {
                namaVesel: null,
                noPendaftaran: 'JL-12345',
                noIRCS: 'IRCS-0001',
                noIMO: 'RFMO-018274',
                zonPenangkapan: 'Zon A',
                spesisSasaran: 'Ikan Tuna',
              },
            },
          },
        ],
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Vessel not found' })
  async getVesselDetailById(@Param('id') id: string): Promise<VesselDetailResponseDto> {
    return await this.vesselDetailService.getVesselDetailById(id);
  }
}