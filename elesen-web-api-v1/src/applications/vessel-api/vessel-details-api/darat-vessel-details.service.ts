import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselDetailsResponseDto, ProfilVeselDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';
import { DaratVesselEntity } from '../../darat/entities/darat-vessels.entity';
import { DaratVesselInspectionEntity } from '../../darat/entities/darat-vessel-inspections.entity';
import { DaratVesselEngineEntity } from '../../darat/entities/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from '../../darat/entities/darat-vessel-hulls.entity';
import { DaratApplicationEntity } from '../../darat/entities/darat-applications.entity';
import { CodeMaster } from '../../common/code-masters/code-masters.entity';
import { KulitEntity } from '../../marin/entities/kulit.entity';
import { KesalahanEntity } from '../../marin/entities/kesalahan.entity';
import { ProfilePentadbirHartaEntity } from '../../users/entities/profile-pentadbir-hartas.entity';
import { KruEntity } from '../../marin/entities/kru.entity';
import { PemilikanEntity } from '../../marin/entities/pemilikan.entity';
import { PematuhanEntity } from '../../marin/entities/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from '../../marin/entities/pendaftaran-antarabangsa.entity';
import { CmEquipment } from '../../marin/entities/cm-equipment.entity';
import { JettieEntity } from '../../marin/entities/jetties.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { VesselEntity } from 'src/legacy/vessels/vessel.entity';

@Injectable()
export class DaratVesselDetailsService {

  constructor(
    @InjectRepository(DaratVesselEntity)
        private readonly daratVesselRepository: Repository<DaratVesselEntity>,
    @InjectRepository(JettieEntity)
      private readonly jettieRepository: Repository<JettieEntity>,
    @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(DaratVesselInspectionEntity)
      private readonly inspectionRepository: Repository<DaratVesselInspectionEntity>,
    @InjectRepository(DaratVesselEngineEntity)
      private readonly enjinRepository: Repository<DaratVesselEngineEntity>,
    @InjectRepository(DaratVesselHullEntity)
      private readonly hullRepository: Repository<DaratVesselHullEntity>,
    @InjectRepository(DaratApplicationEntity)
      private readonly applicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(CodeMaster)
      private readonly codeMasterRepository: Repository<CodeMaster>,
    @InjectRepository(KulitEntity)
      private readonly kulitRepository: Repository<KulitEntity>,
    @InjectRepository(KesalahanEntity)
      private readonly kesalahanRepository: Repository<KesalahanEntity>,
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

    // not related but added just in case
    @InjectRepository(VesselEntity)
        private readonly vesselRepository: Repository<VesselEntity>,
  ) {}

  async findOne(registrationNo : string): Promise<ProfilVeselDto> {
    const daratVessel = await this.daratVesselRepository.findOne({
        where: { registration_number : registrationNo },
      });

      if (!daratVessel) {
        throw new Error('Vessel not found');
      }
    const application = await this.applicationRepository.findOne({ where: { user_id : (daratVessel as any).user_id } });
    const inspection = await this.inspectionRepository.findOne({ where: { vessel_id: (daratVessel as any).id } });
    const user = await this.userRepository.findOne({ where: { id: (daratVessel as any).user_id } });
    const hull = await this.hullRepository.findOne({ where: { user_id : (daratVessel as any).user_id } });
    const codeMaster = await this.codeMasterRepository.findOne({ where: { code: (daratVessel as any).negeri } });
    const enjin = await this.enjinRepository.findOne({ where: { vessel_id: (daratVessel as any).id } });


    // below cannot related to darat_vessel but add here just incase

    let kulit: any = null;
    let kesalahan: any = null;
    let pengkalan: any[] = [];
    let pentadbirHarta: any = null;
    let kru: any[] = [];
    let pemilikan: any = null;
    let pematuhan: any = null;
    let pendaftaranAntarabangsa: any = null;
    let peralatan: any[] = [];

    const vessel = await this.vesselRepository.findOne({ where: { user_id : (daratVessel as any).user_id } });
    if (vessel) {
         kulit = await this.kulitRepository.findOne({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
         kesalahan = await this.kesalahanRepository.findOne({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
         pengkalan = await this.jettieRepository.find({ where: { state_id: (vessel as any).negeri } });
         pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: (vessel as any).id } });
         kru = await this.kruRepository.find({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
         pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
         pematuhan = await this.pematuhanRepository.findOne({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
         pendaftaranAntarabangsa = await this.pendaftaranAntarabangsaRepository.findOne({ where: { vessel_id: (vessel as any).id } });
         peralatan = await this.cmEquipmentRepository.find({ where: { vessel_id: (vessel as any).no_pendaftaran, is_active: true } });

      }



    return {
      maklumatAmVesel: {
        noPendaftaranVesel: (daratVessel as any).registration_number || '',
        noGeran: null,
        noPatilKekal: (daratVessel as any).registration_number || '',
        tarikhDaftar: (daratVessel as any).created_at?.toISOString().split('T')[0] || '',
        lokasiPembinaanVesel: (vessel as any)?.pangkalan || '',
        negaraAsal: 'Malaysia',
        pemasanganMTU: false,
        noPendaftaranMTU: null,
        hakMilik: 'Persendirian',
        kodRFIDQR: 'RFID0001',
        pengkalanUtama: true,
        pelabuhanUtama: (daratVessel as any).pangkalan || '',
        pelabuhanTambahan: (daratVessel as any).pangkalan || '',
      },
      lesen: {
        noLesen: (daratVessel as any).vessel_no || '',
        tarikhMula: (daratVessel as any).license_start ? new Date((daratVessel as any).license_start).toISOString().split('T')[0] : '',
        tarikhTamat: (daratVessel as any).license_end ? new Date((daratVessel as any).license_end).toISOString().split('T')[0] : '',
        zon: (daratVessel as any).zon || '',
        noPatil: (daratVessel as any).vessel_no || '',
        status: 'aktif',
        statusIUUU: 'Tidak Aktif',
      },
      kulit: {
        tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
        panjangMeter: parseFloat(kulit?.panjang || '0'),
        lebarMeter: parseFloat(kulit?.lebar || '0'),
        kedalamanMeter: parseFloat(kulit?.dalam || '0'),
        muatanGRT: (vessel as any)?.grt || 0,
        status: kulit?.status_kulit || 'Tidak Aktif',
        tindakan: null,
      },
      enjin: {
        maklumatAmEjin: {
          jenisEnjin: 'Unknown',
          bahanApi: 'Diesel',
          jenamaEnjin: enjin?.brand || '',
          kuasaKuda: enjin?.horsepower || 0,
          noEnjin: enjin?.engine_number || '',
          model: enjin?.model || '',
          turbo: 'Tiada',
          tarikhPEV: '',
          kategoriEnjin: '',
          status: enjin?.is_active === 1 ? 'aktif' : 'tidak aktif',
        },
        gambar: {
          enjinUrl: enjin?.engine_image_path || 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          noEnjinUrl: enjin?.engine_number_image_path || 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          penandaPEVUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          turboUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          generatorUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        },
      },
      peralatan: peralatan.map((p: any) => ({
        nama: p.equipment_name,
        jenisPeralatan: this.mapEquipmentType(p.equipment_type),
        kuantiti: p.amount, // Default value, can be updated based on requirements
        tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
        status: p.is_active ? 'Aktif' : 'Tidak Aktif',
      })),
      kru: kru.map((k: any) => ({
        noKadPendaftaran: k.no_kad || '',
        nama: k.nama_kru || '',
        negara: k.negara || 'MALAYSIA',
        noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
        jawatan: k.jawatan || 'Pembantu Nelayan',
      })),
      pengkalan: pengkalan.map((p: any) => ({
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
            diCatBetul: hull?.brightly_painted ? true : false,
            diCatTerang: hull?.brightly_painted ? true : false,
            kodZon: null,
            diAtasBumbung: false,
          },
          tandaPenukulBesi: {
            tandaBahagianLaluan: false,
            hurufKodTanda: null,
          },
          noPendaftaranVesel: {
            diTebuk: hull?.drilled ? true : false,
            diCat: true,
          },
          QRCode: {
            diPasang: false,
            gambar: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          },
          ukuranDimensiVesel: {
            panjangMeter: parseFloat(kulit?.panjang || '0'),
            lebarMeter: parseFloat(kulit?.lebar || '0'),
            kedalamanMeter: parseFloat(kulit?.dalam || '0'),
            muatanGRT: (vessel as any)?.grt || 0,
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
            kiri: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            kanan: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            hadapan: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            belakang: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            keseluruhan: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          },
        },
        enjin: {
          maklumatEnjin: {
            jenama: enjin?.brand || '',
            model: enjin?.model || '',
            turbo: null,
            kuasaKuda: enjin?.horsepower || 0,
            noEnjin: enjin?.engine_number || '',
            penandaVesel: '07-05-2025',
          },
          gambar: {
            enjinUrl: enjin?.engine_image_path || 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            noEnjinUrl: enjin?.engine_number_image_path || 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            penandaEnjinUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            turboUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            generatorUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
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
            MTUUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            AISUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            lampuPelayaranUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            QRCodeUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          },
        },
        peralatanKeselamatan: {
          jaketKeselamatan: {
            status: inspection?.safety_jacket_status ? inspection?.safety_jacket_status : 'Tiada',
            kuantiti: inspection?.safety_jacket_quantity ? inspection?.safety_jacket_quantity : 'Tiada',
            keadaan: inspection?.safety_jacket_condition ? inspection?.safety_jacket_condition : 'Tiada',
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
            MTUUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            AISUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
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
          generalAgreementUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          vesselMarkingUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          laporanPemeriksaanKejuruteraanUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          laporanPemeriksaanSurveyorUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          certOfRegistrationUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          gearMakingUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          hygeineOnBoardUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          internationalOilPollutionPreventionCertUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          internationalTonnageCertUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          sijilKompetensiKakitanganUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          sijilPeralatanKeselmatanUrl: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
        },
      },
      kesalahan: {
        nama: kesalahan?.pesalah || '',
        noKadPengenalan: kesalahan?.no_ic_pesalah || '',
        akta: kesalahan?.akta || '',
        seksyen: kesalahan?.seksyen || '',
        kesalahan: kesalahan?.kesalahan || '',
        tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
        keputusan: kesalahan?.keputusan || '',
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


  async getOwnershipAndCaptain(noVessel: string): Promise<VesselOwnershipCaptainResponseDto> {
    const vessel = await this.vesselRepository.findOne({
      where: { no_pendaftaran: noVessel },
    });

    if (!vessel) {
      throw new Error('Vessel not found');
    }

    // Get ownership information from pemilikan and pentadbirHarta
    const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: (vessel as any).id } });
    const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });

    // Get captain (nakhoda) information from kru table
    const kru = await this.kruRepository.find({ where: { no_pendaftaran: (vessel as any).no_pendaftaran } });
    const nakhoda = kru.find((k: any) => k.jawatan?.toLowerCase().includes('nakhoda') || k.jawatan?.toLowerCase().includes('kapten')) || kru[0];

    return {
      noVessel: noVessel,
      pemilikan: {
        namaPemilik: (pemilikan as any)?.nama_pemilik || (pentadbirHarta as any)?.pemilik_vesel || '',
        noKadPengenalan: (pemilikan as any)?.no_ic_atau_syarikat || '',
      },
      nakhoda: {
        namaNakhoda: (nakhoda as any)?.nama_kru || '',
        noKadPengenalan: (nakhoda as any)?.no_kp_baru || (nakhoda as any)?.no_kp_lama || '',
      },
    };
  }

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
