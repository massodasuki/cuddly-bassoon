import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselDetailsResponseDto, ProfilVeselDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';
import { DaratVesselEntity } from 'src/components/darat-vessels/darat-vessels.entity';

@Injectable()
export class DaratVesselDetailsService {
  constructor(
    @InjectRepository(DaratVesselEntity)
    private readonly daratRepository: Repository<DaratVesselEntity>,
  ) {}

  async findOne(registrationNo : string): Promise<ProfilVeselDto> {
    const vessel = await this.daratRepository.createQueryBuilder('v')
      .leftJoinAndSelect('v.entity', 'entity')
      
      .where('v.registration_no = :noVesel', { registrationNo })
      .getOne();

    if (!vessel) {
      throw new Error('Vessel not found');
    }

    const pengkalan = await this.jettieRepository.find({ where: { state_id: vessel.negeri } });

    return {
      maklumatAmVesel: {
        noPendaftaranVesel: vessel.no_pendaftaran || '',
        noGeran: null,
        noPatilKekal: vessel.vessel_no || '',
        tarikhDaftar: vessel.created_at?.toISOString().split('T')[0] || '',
        lokasiPembinaanVesel: vessel.pangkalan || '',
        negaraAsal: 'KIV',
        pemasanganMTU: false,
        noPendaftaranMTU: null,
        hakMilik: 'KIV',
        kodRFIDQR: 'KIV',
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
        status: 'KIV',
        statusIUUU: 'KIV',
      },
      kulit: {
        tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
        panjangMeter: parseFloat(kulit?.panjang || '0'),
        lebarMeter: parseFloat(kulit?.lebar || '0'),
        kedalamanMeter: parseFloat(kulit?.dalam || '0'),
        muatanGRT: vessel.grt || 0,
        status: kulit?.status_kulit || 'KIV',
        tindakan: null,
      },
      enjin: {
        maklumatAmEjin: {
          jenisEnjin: enjin ? (enjin.jenis_enjin === 1 ? 'Sangkut' : 'KIV') : 'KIV',
          bahanApi: enjin?.bahan_api || 'KIV',
          jenamaEnjin: enjin?.jenama || '',
          kuasaKuda: enjin?.kuasa_kuda || 0,
          noEnjin: enjin?.no_enjin || '',
          model: enjin?.model || '',
          turbo: enjin ? (enjin.has_turbo === 1 ? 'Ada' : 'KIV') : 'KIV',
          tarikhPEV: enjin?.tarikh_enjin_dilesenkan?.toISOString().split('T')[0] || '',
          kategoriEnjin: enjin?.kategori_enjin || '',
          status: enjin?.status_enjin || 'KIV',
        },
        gambar: {
          enjinUrl: enjin?.gambar_enjin || 'KIV',
          noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
          penandaPEVUrl: enjin?.gambar_pev || 'KIV',
          turboUrl: enjin?.gambar_turbo || 'KIV',
          generatorUrl: enjin?.gambar_generator || 'KIV',
        },
      },
      peralatan: peralatan.map(p => ({
        nama: p.equipment_name,
        jenisPeralatan: this.mapEquipmentType(p.equipment_type),
        kuantiti: p.amount, // Default value, can be updated based on requirements
        tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
        status: p.is_active ? 'Aktif' : 'KIV',
      })),
      kru: kru.map(k => ({
        noKadPendaftaran: k.no_kad || '',
        nama: k.nama_kru || '',
        negara: k.negara || 'KIV',
        noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
        jawatan: k.jawatan || 'KIV',
      })),
      pengkalan: pengkalan.map(p => ({
        noRujukanPengkalan: p.id,
        namaPengkalan: p.name || '',
        jenisPengkalan: 'KIV',
        district: p.district_id || '',
        state: p.state_id || '',
        tahunMula: p.created_at?.toISOString().split('T')[0] || '',
        status: p.is_active === 1 ? 'Aktif' : 'KIV',
      })),
      pemilikan: {
        namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
        noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
        jenisPemilikan: pemilikan?.jenis_pemilikan || 'KIV',
        district: pemilikan?.daerah || '',
        state: pemilikan?.negeri || '',
        tarikhPemilikan: pemilikan?.tarikh_aktif_pemilikan?.toISOString().split('T')[0] || '',
        status: pemilikan?.status_pemilikan || 'KIV',
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
            gambar: 'KIV',
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
            kiri: 'KIV',
            kanan: 'KIV',
            hadapan: 'KIV',
            belakang: 'KIV',
            keseluruhan: 'KIV',
          },
        },
        enjin: {
          maklumatEnjin: {
            jenama: enjin?.jenama || '',
            model: enjin?.model || '',
            turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
            kuasaKuda: enjin?.kuasa_kuda || 0,
            noEnjin: enjin?.no_enjin || '',
            penandaVesel: 'KIV',
          },
          gambar: {
            enjinUrl: enjin?.gambar_enjin || 'KIV',
            noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
            penandaEnjinUrl: enjin?.gambar_pev || 'KIV',
            turboUrl: enjin?.gambar_turbo || 'KIV',
            generatorUrl: enjin?.gambar_generator || 'KIV',
          },
        },
        peralatanPelayaran: {
          lampuPelayaran: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          MTU: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          AIS: {
            status: 'KIV',
            keadaan: 'KIV',
          },
          CCTV: {
            status: 'KIV',
            keadaan: 'KIV',
          },
          GPS: {
            status: 'KIV',
          },
          gambar: {
            MTUUrl: 'KIV',
            AISUrl: 'KIV',
            lampuPelayaranUrl: 'KIV',
            QRCodeUrl: 'KIV',
          },
        },
        peralatanKeselamatan: {
          jaketKeselamatan: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          boyaKeselamatan: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          alatPemadamApi: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          rakitKeselamatan: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          radioWireless: {
            status: 'KIV',
            kuantiti: 'KIV',
            keadaan: 'KIV',
          },
          gambar: {
            MTUUrl: 'KIV',
            AISUrl: 'KIV',
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
          generalAgreementUrl: 'KIV',
          vesselMarkingUrl: 'KIV',
          laporanPemeriksaanKejuruteraanUrl: 'KIV',
          laporanPemeriksaanSurveyorUrl: 'KIV',
          certOfRegistrationUrl: 'KIV',
          gearMakingUrl: 'KIV',
          hygeineOnBoardUrl: 'KIV',
          internationalOilPollutionPreventionCertUrl: 'KIV',
          internationalTonnageCertUrl: 'KIV',
          sijilKompetensiKakitanganUrl: 'KIV',
          sijilPeralatanKeselmatanUrl: 'KIV',
        },
      },
      kesalahan: {
        nama: kesalahan?.pesalah || '',
        noKadPengenalan: kesalahan?.no_ic_pesalah || '',
        akta: kesalahan?.akta || 'KIV',
        seksyen: kesalahan?.seksyen || 'KIV',
        kesalahan: kesalahan?.kesalahan || 'KIV',
        tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
        keputusan: kesalahan?.keputusan || 'KIV',
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
            negaraAsal: 'KIV',
            pemasanganMTU: false,
            noPendaftaranMTU: null,
            hakMilik: 'KIV',
            kodRFIDQR: 'KIV',
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
            status: 'KIV',
            statusIUUU: 'KIV',
          },
          kulit: {
            tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
            panjangMeter: parseFloat(kulit?.panjang || '0'),
            lebarMeter: parseFloat(kulit?.lebar || '0'),
            kedalamanMeter: parseFloat(kulit?.dalam || '0'),
            muatanGRT: vessel.grt || 0,
            status: kulit?.status_kulit || 'KIV',
            tindakan: null,
          },
          enjin: {
            maklumatAmEjin: {
              jenisEnjin: enjin ? (enjin.jenis_enjin === 1 ? 'Sangkut' : 'KIV') : 'KIV',
              bahanApi: enjin?.bahan_api || 'KIV',
              jenamaEnjin: enjin?.jenama || '',
              kuasaKuda: enjin?.kuasa_kuda || 0,
              noEnjin: enjin?.no_enjin || '',
              model: enjin?.model || '',
              turbo: enjin ? (enjin.has_turbo === 1 ? 'Ada' : 'KIV') : 'KIV',
              tarikhPEV: enjin?.tarikh_enjin_dilesenkan?.toISOString().split('T')[0] || '',
              kategoriEnjin: enjin?.kategori_enjin || '',
              status: enjin?.status_enjin || 'KIV',
            },
            gambar: {
              enjinUrl: enjin?.gambar_enjin || 'KIV',
              noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
              penandaPEVUrl: enjin?.gambar_pev || 'KIV',
              turboUrl: enjin?.gambar_turbo || 'KIV',
              generatorUrl: enjin?.gambar_generator || 'KIV',
            },
          },
          peralatan: peralatanList.map(p => ({
            nama: p.equipment_name,
            jenisPeralatan: this.mapEquipmentType(p.equipment_type),
            kuantiti: p.amount || null, // Default value, can be updated based on requirements
            tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
            status: p.is_active ? 'Aktif' : 'KIV',
          })),
          kru: kru.map(k => ({
            noKadPendaftaran: k.no_kad || '',
            nama: k.nama_kru || '',
            negara: k.negara || 'KIV',
            noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
            jawatan: k.jawatan || 'KIV',
          })),
          pengkalan: pengkalan.map(p => ({
            noRujukanPengkalan: p.id,
            namaPengkalan: p.name || '',
            jenisPengkalan: 'KIV',
            district: p.district_id || '',
            state: p.state_id || '',
            tahunMula: p.created_at?.toISOString().split('T')[0] || '',
            status: p.is_active === 1 ? 'Aktif' : 'KIV',
          })),
          pemilikan: {
            namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
            noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
            jenisPemilikan: pemilikan?.jenis_pemilikan || 'KIV',
            district: pemilikan?.daerah || '',
            state: pemilikan?.negeri || '',
            tarikhPemilikan: pemilikan?.tarikh_aktif_pemilikan?.toISOString().split('T')[0] || '',
            status: pemilikan?.status_pemilikan || 'KIV',
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
                gambar: 'KIV',
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
                kiri: 'KIV',
                kanan: 'KIV',
                hadapan: 'KIV',
                belakang: 'KIV',
                keseluruhan: 'KIV',
              },
            },
            enjin: {
              maklumatEnjin: {
                jenama: enjin?.jenama || '',
                model: enjin?.model || '',
                turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
                kuasaKuda: enjin?.kuasa_kuda || 0,
                noEnjin: enjin?.no_enjin || '',
                penandaVesel: 'KIV',
              },
              gambar: {
                enjinUrl: enjin?.gambar_enjin || 'KIV',
                noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
                penandaEnjinUrl: enjin?.gambar_pev || 'KIV',
                turboUrl: enjin?.gambar_turbo || 'KIV',
                generatorUrl: enjin?.gambar_generator || 'KIV',
              },
            },
            peralatanPelayaran: {
              lampuPelayaran: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              MTU: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              AIS: {
                status: 'KIV',
                keadaan: 'KIV',
              },
              CCTV: {
                status: 'KIV',
                keadaan: 'KIV',
              },
              GPS: {
                status: 'KIV',
              },
              gambar: {
                MTUUrl: 'KIV',
                AISUrl: 'KIV',
                lampuPelayaranUrl: 'KIV',
                QRCodeUrl: 'KIV',
              },
            },
            peralatanKeselamatan: {
              jaketKeselamatan: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              boyaKeselamatan: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              alatPemadamApi: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              rakitKeselamatan: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              radioWireless: {
                status: 'KIV',
                kuantiti: 'KIV',
                keadaan: 'KIV',
              },
              gambar: {
                MTUUrl: 'KIV',
                AISUrl: 'KIV',
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
              generalAgreementUrl: 'KIV',
              vesselMarkingUrl: 'KIV',
              laporanPemeriksaanKejuruteraanUrl: 'KIV',
              laporanPemeriksaanSurveyorUrl: 'KIV',
              certOfRegistrationUrl: 'KIV',
              gearMakingUrl: 'KIV',
              hygeineOnBoardUrl: 'KIV',
              internationalOilPollutionPreventionCertUrl: 'KIV',
              internationalTonnageCertUrl: 'KIV',
              sijilKompetensiKakitanganUrl: 'KIV',
              sijilPeralatanKeselmatanUrl: 'KIV',
            },
          },
          kesalahan: {
            nama: kesalahan?.pesalah || '',
            noKadPengenalan: kesalahan?.no_ic_pesalah || '',
            akta: kesalahan?.akta || 'KIV',
            seksyen: kesalahan?.seksyen || 'KIV',
            kesalahan: kesalahan?.kesalahan || 'KIV',
            tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
            keputusan: kesalahan?.keputusan || 'KIV',
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

