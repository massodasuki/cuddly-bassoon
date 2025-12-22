import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselDetailsResponseDto, ProfilVeselDto, VesselOwnershipCaptainResponseDto } from './dto/vessel-details-response.dto';
import { DaratVesselEntity } from 'src/components/darat-vessels/darat-vessels.entity';
import { JettieEntity } from 'src/components/jetties/jetties.entity';
import { UserEntity } from 'src/components/users/users.entity';
import { DaratVesselInspectionEntity } from 'src/components/darat-vessel-inspections/darat-vessel-inspections.entity';
import { DaratVesselEngineEntity } from 'src/components/darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from 'src/components/darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratApplicationEntity } from 'src/components/darat-applications/darat-applications.entity';
import { CodeMaster } from 'src/components/code-masters/code-masters.entity';
import { KulitEntity } from 'src/components/kulit/kulit.entity';
import { EnjinEntity } from 'src/components/enjin/enjin.entity';
import { KesalahanEntity } from 'src/components/kesalahan/kesalahan.entity';
import { ProfilePentadbirHartaEntity } from 'src/components/profile-pentadbir-hartas/profile-pentadbir-hartas.entity';
import { KruEntity } from 'src/components/kru/kru.entity';
import { PemilikanEntity } from 'src/components/pemilikan/pemilikan.entity';
import { PematuhanEntity } from 'src/components/pematuhan/pematuhan.entity';
import { PendaftaranAntarabangsaEntity } from 'src/components/pendaftaran-antarabangsa/pendaftaran-antarabangsa.entity';
import { CmEquipment } from 'src/components/cm-equipment/cm-equipment.entity';

@Injectable()
export class DaratVesselDetailsService {
  constructor(
    @InjectRepository(DaratVesselEntity)
    private readonly daratRepository: Repository<DaratVesselEntity>,
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
  ) {}

  async findOne(registrationNo : string): Promise<ProfilVeselDto> {
    const queryBuilder = this.daratRepository.createQueryBuilder('dv')
      .select([
        'dv.id',
        'dv.registration_number',
        'dv.length',
        'dv.width',
        'dv.depth',
        'dv.transportation',
        'dv.is_approved',
        'dv.is_active',
        'dv.negeri',
        'u.name AS user_name',
        'u.email AS user_email',
        'dvi.inspection_date',
        'dvi.vessel_condition',
        'dvi.hull_type',
        'dvi.engine_brand',
        'dvi.engine_model',
        'dvi.horsepower',
        'dvi.safety_jacket_status',
        'dvi.safety_jacket_quantity',
        'dvi.safety_jacket_condition',
        'dve.model AS engine_model',
        'dve.brand AS engine_brand',
        'dve.horsepower AS engine_hp',
        'dve.engine_number',
        'dvh.hull_type AS hull_type',
        'dvh.length AS hull_length',
        'dvh.width AS hull_width',
        'dvh.depth AS hull_depth',
        'da.no_rujukan',
        'da.is_approved AS application_approved',
        'cm_type.name AS application_type',
        'cm_status.name AS application_status'
      ])
      .leftJoin('users', 'u', 'dv.user_id = u.id')
      .leftJoin('darat_vessel_inspections', 'dvi', 'dv.id = dvi.vessel_id')
      .leftJoin('darat_vessel_engines', 'dve', 'dv.id = dve.vessel_id')
      .leftJoin('darat_vessel_hulls', 'dvh', 'dv.id = dvh.vessel_id')
      .leftJoin('darat_applications', 'da', 'dvi.application_id = da.id')
      .leftJoin('code_masters', 'cm_type', 'da.application_type_id = cm_type.id')
      .leftJoin('code_masters', 'cm_status', 'da.application_status_id = cm_status.id')
      .where('dv.registration_number = :registrationNo', { registrationNo })
      .andWhere('dv.is_active = 1');

    const result = await queryBuilder.getRawOne();

    if (!result) {
      throw new Error('Vessel not found');
    }

    const data = result;

    // Fetch additional data
    const kulit = await this.kulitRepository.findOne({ where: { no_pendaftaran: registrationNo } });
    const enjin = await this.enjinRepository.findOne({ where: { no_pendaftaran: registrationNo } });
    const kesalahan = await this.kesalahanRepository.findOne({ where: { no_pendaftaran: registrationNo } });
    const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: data.id } });
    const kru = await this.kruRepository.find({ where: { no_pendaftaran: registrationNo } });
    const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: registrationNo } });
    const pematuhan = await this.pematuhanRepository.findOne({ where: { no_pendaftaran: registrationNo } });
    const pendaftaranAntarabangsa = await this.pendaftaranAntarabangsaRepository.findOne({ where: { vessel_id: data.id } });
    const peralatanList = await this.cmEquipmentRepository.find({ where: { vessel_id: registrationNo, is_active: true } });
    const pengkalan = await this.jettieRepository.find({ where: { state_id: data.negeri } });

    return {
      maklumatAmVesel: {
        noPendaftaranVesel: data.registration_number || '',
        noGeran: null,
        noPatilKekal: data.registration_number || '',
        tarikhDaftar: '',
        lokasiPembinaanVesel: '',
        negaraAsal: 'KIV',
        pemasanganMTU: false,
        noPendaftaranMTU: null,
        hakMilik: 'KIV',
        kodRFIDQR: 'KIV',
        pengkalanUtama: true,
        pelabuhanUtama: '',
        pelabuhanTambahan: '',
      },
      lesen: {
        noLesen: data.registration_number || '',
        tarikhMula: '',
        tarikhTamat: '',
        zon: '',
        noPatil: data.registration_number || '',
        status: data.application_status || 'KIV',
        statusIUUU: 'KIV',
      },
      kulit: {
        tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
        panjangMeter: parseFloat(kulit?.panjang || data.hull_length || data.length || '0'),
        lebarMeter: parseFloat(kulit?.lebar || data.hull_width || data.width || '0'),
        kedalamanMeter: parseFloat(kulit?.dalam || data.hull_depth || data.depth || '0'),
        muatanGRT: 0,
        status: kulit?.status_kulit || data.hull_type || 'KIV',
        tindakan: null,
      },
      enjin: {
        maklumatAmEjin: {
          jenisEnjin: enjin ? (enjin.jenis_enjin === 1 ? 'Sangkut' : 'KIV') : 'KIV',
          bahanApi: enjin?.bahan_api || 'KIV',
          jenamaEnjin: enjin?.jenama || data.engine_brand || '',
          kuasaKuda: enjin?.kuasa_kuda || data.horsepower || 0,
          noEnjin: enjin?.no_enjin || data.engine_number || '',
          model: enjin?.model || data.engine_model || '',
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
        kuantiti: p.amount || null,
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
        namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || data.user_name || '',
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
            panjangMeter: parseFloat(kulit?.panjang || data.hull_length || data.length || '0'),
            lebarMeter: parseFloat(kulit?.lebar || data.hull_width || data.width || '0'),
            kedalamanMeter: parseFloat(kulit?.dalam || data.hull_depth || data.depth || '0'),
            muatanGRT: 0,
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
            jenama: enjin?.jenama || data.engine_brand || '',
            model: enjin?.model || data.engine_model || '',
            turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
            kuasaKuda: enjin?.kuasa_kuda || data.horsepower || 0,
            noEnjin: enjin?.no_enjin || data.engine_number || '',
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
            status: data.safety_jacket_status || 'KIV',
            kuantiti: data.safety_jacket_quantity || 'KIV',
            keadaan: data.safety_jacket_condition || 'KIV',
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

  // async findAll(): Promise<VesselDetailsResponseDto> {
  //   const vessels = await this.daratRepository.find({
  //     relations: ['entity'],
  //   });

  //   const data: ProfilVeselDto[] = await Promise.all(
  //     vessels.map(async (vessel) => {
  //       const kulit = await this.kulitRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const enjin = await this.enjinRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const kesalahan = await this.kesalahanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const pengkalan = await this.jettieRepository.find({ where: { state_id: vessel.negeri } });
  //       const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: vessel.id } });
  //       const kru = await this.kruRepository.find({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const pematuhan = await this.pematuhanRepository.findOne({ where: { no_pendaftaran: vessel.no_pendaftaran } });
  //       const pendaftaranAntarabangsa = await this.pendaftaranAntarabangsaRepository.findOne({ where: { vessel_id: vessel.id } });
  //       const peralatanList = await this.cmEquipmentRepository.find({ where: { vessel_id: vessel.no_pendaftaran, is_active: true } });

  //       return {
  //         maklumatAmVesel: {
  //           noPendaftaranVesel: vessel.no_pendaftaran || '',
  //           noGeran: null,
  //           noPatilKekal: vessel.vessel_no || '',
  //           tarikhDaftar: vessel.created_at?.toISOString().split('T')[0] || '',
  //           lokasiPembinaanVesel: vessel.pangkalan || '',
  //           negaraAsal: 'KIV',
  //           pemasanganMTU: false,
  //           noPendaftaranMTU: null,
  //           hakMilik: 'KIV',
  //           kodRFIDQR: 'KIV',
  //           pengkalanUtama: true,
  //           pelabuhanUtama: vessel.pangkalan || '',
  //           pelabuhanTambahan: vessel.pangkalan || '',
  //         },
  //         lesen: {
  //           noLesen: vessel.vessel_no || '',
  //           tarikhMula: vessel.license_start ? new Date(vessel.license_start).toISOString().split('T')[0] : '',
  //           tarikhTamat: vessel.license_end ? new Date(vessel.license_end).toISOString().split('T')[0] : '',
  //           zon: vessel.zon || '',
  //           noPatil: vessel.vessel_no || '',
  //           status: 'KIV',
  //           statusIUUU: 'KIV',
  //         },
  //         kulit: {
  //           tarikhDilesen: kulit?.tarikh_kulit_dilesenkan || '',
  //           panjangMeter: parseFloat(kulit?.panjang || '0'),
  //           lebarMeter: parseFloat(kulit?.lebar || '0'),
  //           kedalamanMeter: parseFloat(kulit?.dalam || '0'),
  //           muatanGRT: vessel.grt || 0,
  //           status: kulit?.status_kulit || 'KIV',
  //           tindakan: null,
  //         },
  //         enjin: {
  //           maklumatAmEjin: {
  //             jenisEnjin: enjin ? (enjin.jenis_enjin === 1 ? 'Sangkut' : 'KIV') : 'KIV',
  //             bahanApi: enjin?.bahan_api || 'KIV',
  //             jenamaEnjin: enjin?.jenama || '',
  //             kuasaKuda: enjin?.kuasa_kuda || 0,
  //             noEnjin: enjin?.no_enjin || '',
  //             model: enjin?.model || '',
  //             turbo: enjin ? (enjin.has_turbo === 1 ? 'Ada' : 'KIV') : 'KIV',
  //             tarikhPEV: enjin?.tarikh_enjin_dilesenkan?.toISOString().split('T')[0] || '',
  //             kategoriEnjin: enjin?.kategori_enjin || '',
  //             status: enjin?.status_enjin || 'KIV',
  //           },
  //           gambar: {
  //             enjinUrl: enjin?.gambar_enjin || 'KIV',
  //             noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
  //             penandaPEVUrl: enjin?.gambar_pev || 'KIV',
  //             turboUrl: enjin?.gambar_turbo || 'KIV',
  //             generatorUrl: enjin?.gambar_generator || 'KIV',
  //           },
  //         },
  //         peralatan: peralatanList.map(p => ({
  //           nama: p.equipment_name,
  //           jenisPeralatan: this.mapEquipmentType(p.equipment_type),
  //           kuantiti: p.amount || null, // Default value, can be updated based on requirements
  //           tarikDilesen: p.date_licensed ? new Date(p.date_licensed).toISOString().split('T')[0] : '',
  //           status: p.is_active ? 'Aktif' : 'KIV',
  //         })),
  //         kru: kru.map(k => ({
  //           noKadPendaftaran: k.no_kad || '',
  //           nama: k.nama_kru || '',
  //           negara: k.negara || 'KIV',
  //           noKadPengenalan: k.no_kp_baru || k.no_kp_lama || '',
  //           jawatan: k.jawatan || 'KIV',
  //         })),
  //         pengkalan: pengkalan.map(p => ({
  //           noRujukanPengkalan: p.id,
  //           namaPengkalan: p.name || '',
  //           jenisPengkalan: 'KIV',
  //           district: p.district_id || '',
  //           state: p.state_id || '',
  //           tahunMula: p.created_at?.toISOString().split('T')[0] || '',
  //           status: p.is_active === 1 ? 'Aktif' : 'KIV',
  //         })),
  //         pemilikan: {
  //           namaPemilik: pemilikan?.nama_pemilik || pentadbirHarta?.pemilik_vesel || '',
  //           noKadPengenalan: pemilikan?.no_ic_atau_syarikat || '',
  //           jenisPemilikan: pemilikan?.jenis_pemilikan || 'KIV',
  //           district: pemilikan?.daerah || '',
  //           state: pemilikan?.negeri || '',
  //           tarikhPemilikan: pemilikan?.tarikh_aktif_pemilikan?.toISOString().split('T')[0] || '',
  //           status: pemilikan?.status_pemilikan || 'KIV',
  //         },
  //         pematuhan: {
  //           maklumatVesel: {
  //             pakuPenandaLebar: null,
  //             rumahKemudi: {
  //               diCatBetul: true,
  //               diCatTerang: false,
  //               kodZon: null,
  //               diAtasBumbung: false,
  //             },
  //             tandaPenukulBesi: {
  //               tandaBahagianLaluan: false,
  //               hurufKodTanda: null,
  //             },
  //             noPendaftaranVesel: {
  //               diTebuk: false,
  //               diCat: true,
  //             },
  //             QRCode: {
  //               diPasang: false,
  //               gambar: 'KIV',
  //             },
  //             ukuranDimensiVesel: {
  //               panjangMeter: parseFloat(kulit?.panjang || '0'),
  //               lebarMeter: parseFloat(kulit?.lebar || '0'),
  //               kedalamanMeter: parseFloat(kulit?.dalam || '0'),
  //               muatanGRT: vessel.grt || 0,
  //             },
  //             ukuranGeometriVesel: {
  //               a: null,
  //               b: null,
  //               c: null,
  //               d: null,
  //               e: null,
  //               f: null,
  //             },
  //             gambar: {
  //               kiri: 'KIV',
  //               kanan: 'KIV',
  //               hadapan: 'KIV',
  //               belakang: 'KIV',
  //               keseluruhan: 'KIV',
  //             },
  //           },
  //           enjin: {
  //             maklumatEnjin: {
  //               jenama: enjin?.jenama || '',
  //               model: enjin?.model || '',
  //               turbo: enjin?.has_turbo === 1 ? 'Ada' : null,
  //               kuasaKuda: enjin?.kuasa_kuda || 0,
  //               noEnjin: enjin?.no_enjin || '',
  //               penandaVesel: 'KIV',
  //             },
  //             gambar: {
  //               enjinUrl: enjin?.gambar_enjin || 'KIV',
  //               noEnjinUrl: enjin?.gambar_no_enjin || 'KIV',
  //               penandaEnjinUrl: enjin?.gambar_pev || 'KIV',
  //               turboUrl: enjin?.gambar_turbo || 'KIV',
  //               generatorUrl: enjin?.gambar_generator || 'KIV',
  //             },
  //           },
  //           peralatanPelayaran: {
  //             lampuPelayaran: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             MTU: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             AIS: {
  //               status: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             CCTV: {
  //               status: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             GPS: {
  //               status: 'KIV',
  //             },
  //             gambar: {
  //               MTUUrl: 'KIV',
  //               AISUrl: 'KIV',
  //               lampuPelayaranUrl: 'KIV',
  //               QRCodeUrl: 'KIV',
  //             },
  //           },
  //           peralatanKeselamatan: {
  //             jaketKeselamatan: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             boyaKeselamatan: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             alatPemadamApi: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             rakitKeselamatan: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             radioWireless: {
  //               status: 'KIV',
  //               kuantiti: 'KIV',
  //               keadaan: 'KIV',
  //             },
  //             gambar: {
  //               MTUUrl: 'KIV',
  //               AISUrl: 'KIV',
  //             },
  //           },
  //           kelengkapanMenangkapIkan: {
  //             echoSounder: false,
  //             sonar: false,
  //             netHouler: false,
  //             powerBlock: false,
  //             petakIkan: false,
  //             RSW: false,
  //           },
  //           dokumen: {
  //             generalAgreementUrl: 'KIV',
  //             vesselMarkingUrl: 'KIV',
  //             laporanPemeriksaanKejuruteraanUrl: 'KIV',
  //             laporanPemeriksaanSurveyorUrl: 'KIV',
  //             certOfRegistrationUrl: 'KIV',
  //             gearMakingUrl: 'KIV',
  //             hygeineOnBoardUrl: 'KIV',
  //             internationalOilPollutionPreventionCertUrl: 'KIV',
  //             internationalTonnageCertUrl: 'KIV',
  //             sijilKompetensiKakitanganUrl: 'KIV',
  //             sijilPeralatanKeselmatanUrl: 'KIV',
  //           },
  //         },
  //         kesalahan: {
  //           nama: kesalahan?.pesalah || '',
  //           noKadPengenalan: kesalahan?.no_ic_pesalah || '',
  //           akta: kesalahan?.akta || 'KIV',
  //           seksyen: kesalahan?.seksyen || 'KIV',
  //           kesalahan: kesalahan?.kesalahan || 'KIV',
  //           tarikh: kesalahan?.tarikh?.toISOString().split('T')[0] || '',
  //           keputusan: kesalahan?.keputusan || 'KIV',
  //         },
  //         pendaftaranAntarabangsa: {
  //           namaVesel: null,
  //           noPendaftaran: pendaftaranAntarabangsa?.no_pendaftaran || '',
  //           noIRCS: pendaftaranAntarabangsa?.no_ircs || '',
  //           noIMO: pendaftaranAntarabangsa?.no_rfmo || '',
  //           zonPenangkapan: pendaftaranAntarabangsa?.kawasan_penangkapan || '',
  //           spesisSasaran: pendaftaranAntarabangsa?.spesis_sasaran || '',
  //         },
  //       };
  //     })
  //   );

  //   return { data };
  // }
  
  async getOwnershipAndCaptain(noVessel: string): Promise<VesselOwnershipCaptainResponseDto> {
    const vessel = await this.daratRepository.findOne({
      where: { registration_number: noVessel },
    });

    if (!vessel) {
      throw new Error('Vessel not found');
    }

    // Get ownership information from pemilikan and pentadbirHarta
    const pentadbirHarta = await this.pentadbirHartaRepository.findOne({ where: { vessel_id: vessel.id } });
    const pemilikan = await this.pemilikanRepository.findOne({ where: { no_pendaftaran: vessel.registration_number } });

    // Get captain (nakhoda) information from kru table
    const kru = await this.kruRepository.find({ where: { no_pendaftaran: vessel.registration_number } });
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

