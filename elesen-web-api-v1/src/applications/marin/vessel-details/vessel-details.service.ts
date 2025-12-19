import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselEntity } from '../entities/vessel.entity';
import { KulitEntity } from '../entities/kulit.entity';
import { EnjinEntity } from '../entities/enjin.entity';
import { KesalahanEntity } from '../entities/kesalahan.entity';
import { JettieEntity } from '../entities/jetties.entity';
import { ProfilePentadbirHartaEntity } from '../../users/entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../entities/kru.entity';
import { PemilikanEntity } from '../entities/pemilikan.entity';
import { PematuhanEntity } from '../entities/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../entities/cm-equipment.entity';
import { VesselDetailsResponseDto, ProfilVeselDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';

@Injectable()
export class VesselDetailsService {
  constructor(
    @InjectRepository(VesselEntity)
    private readonly vesselRepository: Repository<VesselEntity>,
    @InjectRepository(KulitEntity)
    private readonly kulitRepository: Repository<KulitEntity>,
    @InjectRepository(EnjinEntity)
    private readonly enjinRepository: Repository<EnjinEntity>,
    @InjectRepository(KesalahanEntity)
    private readonly kesalahanRepository: Repository<KesalahanEntity>,
    @InjectRepository(JettieEntity)
    private readonly jettieRepository: Repository<JettieEntity>,
    @InjectRepository(ProfilePentadbirHartaEntity)
    private readonly pentadbirHartaRepository: Repository<ProfilePentadbirHartaEntity>,
    @InjectRepository(KruEntity)
    private readonly kruRepository: Repository<KruEntity>,
    @InjectRepository(PemilikanEntity)
    private readonly pemilikanRepository: Repository<PemilikanEntity>,
    @InjectRepository(PematuhanEntity)
    private readonly pematuhanRepository: Repository<PematuhanEntity>,
    @InjectRepository(PendaftaranAntarabangsaEntity)
    private readonly pendaftaranAntarabangsaRepository: Repository<PendaftaranAntarabangsaEntity>,
    @InjectRepository(CmEquipment)
    private readonly cmEquipmentRepository: Repository<CmEquipment>,
  ) {}

  async findOne(noVesel : string): Promise<ProfilVeselDto> {
    const vessel = await this.vesselRepository.findOne({
        where: { no_pendaftaran : noVesel },
        relations: ['entity'],
      });

      if (!vessel) {
        throw new Error('Vessel not found');
      }

    const kulit = await this.kulitRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const enjin = await this.enjinRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const kesalahan = await this.kesalahanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const pengkalan = await this.jettieRepository.find({ where: { state_id: vessel.negeri } });
    const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: vessel.id } });
    const kru = await this.kruRepository.find({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const pematuhan = await this.pematuhanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const pendaftaranAntarabangsa = await this.pendaftaranAntarabangsaRepository.findOne({ where: { vessel_id: vessel.id } });
    const peralatan = await this.cmEquipmentRepository.find({ where: { vessel_id: vessel.no_pendaftaran, is_active: true } });
    console.log(peralatan)

    return {
      maklumatAmVesel: {
        noPendaftaranVesel: vessel.no_pendaftaran || '',
        noGeran: null,
        noPatilKekal: vessel.vessel_no || '',
        tarikhDaftar: vessel.created_at?.toISOString().split('T')[0] || '',
        lokasiPembinaanVesel: vessel.pangkalan || '',
        negaraAsal: 'Malaysia',
        pemasanganMTU: false,
        noPendaftaranMTU: null,
        hakMilik: 'Persendirian',
        kodRFIDQR: 'RFID0001',
        pengkalanUtama: true,
        pelabuhanUtama: vessel.pangkalan || '',
        pelabuhanTambahan: vessel.pangkalan || '',
      },
      lesen: {
        noLesen: vessel.vessel_no || '',
        tarikhMula: vessel.license_start ? new Date(vessel.license_start).toISOString().split('T')[0] : '',
        tarikhTamat: vessel.license_end ? new Date(vessel.license_end).toISOString().split('T')[0] : '',
        zon: vessel.zon || '',
        noPatil: vessel.vessel_no || '',
        status: 'aktif',
        statusIUUU: 'Tidak Aktif',
      },
      kulit: {
        tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
        panjangMeter: parseFloat(kulit?.panjang || '0'),
        lebarMeter: parseFloat(kulit?.lebar || '0'),
        kedalamanMeter: parseFloat(kulit?.dalam || '0'),
        muatanGRT: vessel.grt || 0,
        status: kulit?.status_kulit || 'Tidak Aktif',
        tindakan: null,
      },
      enjin: {
        maklumatAmEjin: {
          jenisEnjin: enjin?.jenis_enjin === 1 ? 'Sangkut' : 'Unknown',
          bahanApi: enjin?.bahan_api || 'Diesel',
          jenamaEnjin: enjin?.jenama || '',
          kuasaKuda: enjin?.kuasa_kuda || 0,
          noEnjin: enjin?.no_enjin || '',
          model: enjin?.model || '',
          turbo: enjin?.has_turbo === 1 ? 'Ada' : 'Tiada',
          tarikhPEV: enjin?.tarikh_enjin_dilesenkan?.toISOString().split('T')[0] || '',
          kategoriEnjin: enjin?.kategori_enjin || '',
          status: enjin?.status_enjin || 'aktif',
        },
        gambar: {
          enjinUrl: enjin?.gambar_enjin || 'https//dof.gov/abcg.png',
          noEnjinUrl: enjin?.gambar_no_enjin || 'https//dof.gov/abcg.png',
          penandaPEVUrl: enjin?.gambar_pev || 'https//dof.gov/abcg.png',
          turboUrl: enjin?.gambar_turbo || 'https//dof.gov/abcg.png',
          generatorUrl: enjin?.gambar_generator || 'https//dof.gov/abcg.png',
        },
      },
      peralatan: peralatan.map(p => ({
        nama: p.equipment_name,
        jenisPeralatan: this.mapEquipmentType(p.equipment_type),
        kuantiti: p.amount, // Default value, can be updated based on requirements
        tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
        status: p.is_active ? 'Aktif' : 'Tidak Aktif',
      })),
      kru: kru.map(k => ({
        noKadPendaftaran: k.no_kad || '',
        nama: k.nama_kru || '',
        negara: k.negara || 'MALAYSIA',
        noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
        jawatan: k.jawatan || 'Pembantu Nelayan',
      })),
      pengkalan: pengkalan.map(p => ({
        noRujukanPengkalan: p.id,
        namaPengkalan: p.name || '',
        jenisPengkalan: 'Utama',
        district: p.district_id || '',
        state: p.state_id || '',
        tahunMula: p.created_at?.toISOString().split('T')[0] || '',
        status: p.is_active === 1 ? 'Aktif' : 'Tidak Aktif',
      })),
      pemilikan: {
        namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
        noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
        jenisPemilikan: pemilikan?.jenis_pemilikan || 'Individu',
        district: pemilikan?.daerah || '',
        state: pemilikan?.negeri || '',
        tarikhPemilikan: pemilikan?.tarikh_aktif_pemilikan?.toISOString().split('T')[0] || '',
        status: pemilikan?.status_pemilikan || 'Aktif',
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
            panjangMeter: parseFloat(kulit?.panjang || '0'),
            lebarMeter: parseFloat(kulit?.lebar || '0'),
            kedalamanMeter: parseFloat(kulit?.dalam || '0'),
            muatanGRT: vessel.grt || 0,
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
            jenama: enjin?.jenama || '',
            model: enjin?.model || '',
            turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
            kuasaKuda: enjin?.kuasa_kuda || 0,
            noEnjin: enjin?.no_enjin || '',
            penandaVesel: '07-05-2025',
          },
          gambar: {
            enjinUrl: enjin?.gambar_enjin || 'https//dof.gov/abcg.png',
            noEnjinUrl: enjin?.gambar_no_enjin || 'https//dof.gov/abcg.png',
            penandaEnjinUrl: enjin?.gambar_pev || 'https//dof.gov/abcg.png',
            turboUrl: enjin?.gambar_turbo || 'https//dof.gov/abcg.png',
            generatorUrl: enjin?.gambar_generator || 'https//dof.gov/abcg.png',
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
        nama: kesalahan?.pesalah || '',
        noKadPengenalan: kesalahan?.no_ic_pesalah || '',
        akta: kesalahan?.akta || 'Akta Perikanan 1985',
        seksyen: kesalahan?.seksyen || 'Seksyen 15',
        kesalahan: kesalahan?.kesalahan || 'Memancing di kawasan larangan',
        tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
        keputusan: kesalahan?.keputusan || 'Denda RM500',
      },
      pendaftaranAntarabangsa: {
        namaVesel: null,
        noPendaftaran: pendaftaranAntarabangsa?.no_pendaftaran || '',
        noIRCS: pendaftaranAntarabangsa?.no_ircs || '',
        noIMO: pendaftaranAntarabangsa?.no_rfmo || '',
        zonPenangkapan: pendaftaranAntarabangsa?.kawasan_penangkapan || '',
        spesisSasaran: pendaftaranAntarabangsa?.spesis_sasaran || '',
      },
    };
  }

  async findAll(): Promise<VesselDetailsResponseDto> {
    const vessels = await this.vesselRepository.find({
      relations: ['entity'],
    });

    const data: ProfilVeselDto[] = await Promise.all(
      vessels.map(async (vessel) => {
        const kulit = await this.kulitRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const enjin = await this.enjinRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const kesalahan = await this.kesalahanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const pengkalan = await this.jettieRepository.find({ where: { state_id: vessel.negeri } });
        const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: vessel.id } });
        const kru = await this.kruRepository.find({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const pematuhan = await this.pematuhanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
        const pendaftaranAntarabangsa = await this.pendaftaranAntarabangsaRepository.findOne({ where: { vessel_id: vessel.id } });
        const peralatanList = await this.cmEquipmentRepository.find({ where: { vessel_id: vessel.no_pendaftaran, is_active: true } });

        return {
          maklumatAmVesel: {
            noPendaftaranVesel: vessel.no_pendaftaran || '',
            noGeran: null,
            noPatilKekal: vessel.vessel_no || '',
            tarikhDaftar: vessel.created_at?.toISOString().split('T')[0] || '',
            lokasiPembinaanVesel: vessel.pangkalan || '',
            negaraAsal: 'Malaysia',
            pemasanganMTU: false,
            noPendaftaranMTU: null,
            hakMilik: 'Persendirian',
            kodRFIDQR: 'RFID0001',
            pengkalanUtama: true,
            pelabuhanUtama: vessel.pangkalan || '',
            pelabuhanTambahan: vessel.pangkalan || '',
          },
          lesen: {
            noLesen: vessel.vessel_no || '',
            tarikhMula: vessel.license_start ? new Date(vessel.license_start).toISOString().split('T')[0] : '',
            tarikhTamat: vessel.license_end ? new Date(vessel.license_end).toISOString().split('T')[0] : '',
            zon: vessel.zon || '',
            noPatil: vessel.vessel_no || '',
            status: 'aktif',
            statusIUUU: 'Tidak Aktif',
          },
          kulit: {
            tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
            panjangMeter: parseFloat(kulit?.panjang || '0'),
            lebarMeter: parseFloat(kulit?.lebar || '0'),
            kedalamanMeter: parseFloat(kulit?.dalam || '0'),
            muatanGRT: vessel.grt || 0,
            status: kulit?.status_kulit || 'Tidak Aktif',
            tindakan: null,
          },
          enjin: {
            maklumatAmEjin: {
              jenisEnjin: enjin?.jenis_enjin === 1 ? 'Sangkut' : 'Unknown',
              bahanApi: enjin?.bahan_api || 'Diesel',
              jenamaEnjin: enjin?.jenama || '',
              kuasaKuda: enjin?.kuasa_kuda || 0,
              noEnjin: enjin?.no_enjin || '',
              model: enjin?.model || '',
              turbo: enjin?.has_turbo === 1 ? 'Ada' : 'Tiada',
              tarikhPEV: enjin?.tarikh_enjin_dilesenkan?.toISOString().split('T')[0] || '',
              kategoriEnjin: enjin?.kategori_enjin || '',
              status: enjin?.status_enjin || 'aktif',
            },
            gambar: {
              enjinUrl: enjin?.gambar_enjin || 'https//dof.gov/abcg.png',
              noEnjinUrl: enjin?.gambar_no_enjin || 'https//dof.gov/abcg.png',
              penandaPEVUrl: enjin?.gambar_pev || 'https//dof.gov/abcg.png',
              turboUrl: enjin?.gambar_turbo || 'https//dof.gov/abcg.png',
              generatorUrl: enjin?.gambar_generator || 'https//dof.gov/abcg.png',
            },
          },
          peralatan: peralatanList.map(p => ({
            nama: p.equipment_name,
            jenisPeralatan: this.mapEquipmentType(p.equipment_type),
            kuantiti: p.amount || null, // Default value, can be updated based on requirements
            tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
            status: p.is_active ? 'Aktif' : 'Tidak Aktif',
          })),
          kru: kru.map(k => ({
            noKadPendaftaran: k.no_kad || '',
            nama: k.nama_kru || '',
            negara: k.negara || 'MALAYSIA',
            noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
            jawatan: k.jawatan || 'Pembantu Nelayan',
          })),
          pengkalan: pengkalan.map(p => ({
            noRujukanPengkalan: p.id,
            namaPengkalan: p.name || '',
            jenisPengkalan: 'Utama',
            district: p.district_id || '',
            state: p.state_id || '',
            tahunMula: p.created_at?.toISOString().split('T')[0] || '',
            status: p.is_active === 1 ? 'Aktif' : 'Tidak Aktif',
          })),
          pemilikan: {
            namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
            noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
            jenisPemilikan: pemilikan?.jenis_pemilikan || 'Individu',
            district: pemilikan?.daerah || '',
            state: pemilikan?.negeri || '',
            tarikhPemilikan: pemilikan?.tarikh_aktif_pemilikan?.toISOString().split('T')[0] || '',
            status: pemilikan?.status_pemilikan || 'Aktif',
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
                panjangMeter: parseFloat(kulit?.panjang || '0'),
                lebarMeter: parseFloat(kulit?.lebar || '0'),
                kedalamanMeter: parseFloat(kulit?.dalam || '0'),
                muatanGRT: vessel.grt || 0,
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
                jenama: enjin?.jenama || '',
                model: enjin?.model || '',
                turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
                kuasaKuda: enjin?.kuasa_kuda || 0,
                noEnjin: enjin?.no_enjin || '',
                penandaVesel: '07-05-2025',
              },
              gambar: {
                enjinUrl: enjin?.gambar_enjin || 'https//dof.gov/abcg.png',
                noEnjinUrl: enjin?.gambar_no_enjin || 'https//dof.gov/abcg.png',
                penandaEnjinUrl: enjin?.gambar_pev || 'https//dof.gov/abcg.png',
                turboUrl: enjin?.gambar_turbo || 'https//dof.gov/abcg.png',
                generatorUrl: enjin?.gambar_generator || 'https//dof.gov/abcg.png',
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
            nama: kesalahan?.pesalah || '',
            noKadPengenalan: kesalahan?.no_ic_pesalah || '',
            akta: kesalahan?.akta || 'Akta Perikanan 1985',
            seksyen: kesalahan?.seksyen || 'Seksyen 15',
            kesalahan: kesalahan?.kesalahan || 'Memancing di kawasan larangan',
            tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
            keputusan: kesalahan?.keputusan || 'Denda RM500',
          },
          pendaftaranAntarabangsa: {
            namaVesel: null,
            noPendaftaran: pendaftaranAntarabangsa?.no_pendaftaran || '',
            noIRCS: pendaftaranAntarabangsa?.no_ircs || '',
            noIMO: pendaftaranAntarabangsa?.no_rfmo || '',
            zonPenangkapan: pendaftaranAntarabangsa?.kawasan_penangkapan || '',
            spesisSasaran: pendaftaranAntarabangsa?.spesis_sasaran || '',
          },
        };
      })
    );

    return { data };
  }

  // async findOne(id: string): Promise<VesselDetailsResponseDto> {
  //   const vessel = await this.vesselRepository.findOne({
  //     where: { id },
  //     relations: ['entity'],
  //   });

  //   if (!vessel) {
  //     throw new Error('Vessel not found');
  //   }

  //   const data = await this.findAll();
  //   const vesselDetail = data.data.find(v => v.maklumatAmVesel.noPendaftaranVesel === vessel.no_pendaftaran);

  //   return { data: vesselDetail ? [vesselDetail] : [] };
  
  async getOwnershipAndCaptain(noVessel: string): Promise<VesselOwnershipCaptainResponseDto> {
    const vessel = await this.vesselRepository.findOne({
      where: { no_pendaftaran: noVessel },
      relations: ['entity'],
    });

    if (!vessel) {
      throw new Error('Vessel not found');
    }

    // Get ownership information from pemilikan and pentadbirHarta
    const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: vessel.id } });
    const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });

    // Get captain (nakhoda) information from kru table
    const kru = await this.kruRepository.find({ where: { no_pendaftaran: vessel.no_pendaftaran } });
    const nakhoda = kru.find(k => k.jawatan?.toLowerCase().includes('nakhoda') || k.jawatan?.toLowerCase().includes('kapten')) || kru[0];

    return {
      noVessel: noVessel,
      pemilikan: {
        namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
        noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
      },
      nakhoda: {
        namaNakhoda: nakhoda?.nama_kru || '',
        noKadPengenalan: nakhoda?.no_kp_baru || nakhoda?.no_kp_lama || '',
      },
    };
  }

  
  // }

  private mapEquipmentType(equipmentType: number): string {
    switch (equipmentType) {
      case 1:
        return 'Utama';
      case 2:
        return 'Tambahan';
      default:
        return 'Tidak Diketahui';
    }
  }
}