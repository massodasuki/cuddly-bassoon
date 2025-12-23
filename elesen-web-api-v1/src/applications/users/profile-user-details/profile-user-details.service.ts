import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUserEntity } from '../entities/profile-users.entity';
import { VesselEntity } from '../../marin/vessels/vessel.entity';
import { ProfileUserVesselEntity } from '../entities/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../entities/profile-pengusaha-skls.entity';
import { ApplicationV2ProfileUser } from '../../../components/application-v2-profile-user/application-v2-profile-user.entity';
import { JettieEntity } from '../../marin/entities/jetties.entity';
import { RiverEntity } from '../../marin/entities/rivers.entity';
import { KesalahanEntity } from '../../marin/entities/kesalahan.entity';
import { ParliamentEntity } from '../../marin/entities/parliaments.entity';
import { ParliamentSeatEntity } from '../../marin/entities/parliament-seats.entity';
import { ProfileUserDetailsDto } from './profile-user-details.dto';
import { FishingLogNdEntity } from '../../marin/entities/fishing-log-nds.entity';
import { CatchingLocationNdEntity } from '../../marin/entities/catching-location-nds.entity';
import { KulitEntity } from '../../marin/entities/kulit.entity';
import { EnjinEntity } from '../../marin/entities/enjin.entity';
import { DaratHelpAgencyFishermansEntity } from '../../darat/entities/darat-help-agency-fishermans.entity';
import { DaratUserFishermanInfosEntity } from '../../darat/entities/darat-user-fisherman-infos.entity';
import { DaratVesselEntity } from 'src/components/darat-vessels/darat-vessels.entity';
import { DaratVesselInspectionEntity } from 'src/components/darat-vessel-inspections/darat-vessel-inspections.entity';
import { DaratVesselEngineEntity } from 'src/components/darat-vessel-engines/darat-vessel-engines.entity';
import { DaratVesselHullEntity } from 'src/components/darat-vessel-hulls/darat-vessel-hulls.entity';
import { DaratApplicationEntity } from 'src/components/darat-applications/darat-applications.entity';
import { CodeMaster } from 'src/legacy/code-masters/code-masters.entity';
import { DaratBaseJettieEntity } from 'src/components/darat-base-jetties/darat-base-jetties.entity';
import { DaratUserEquipmentEntity } from 'src/components/darat-user-equipments/darat-user-equipments.entity';

@Injectable()
export class ProfileUserDetailsService {
  constructor(
    @InjectRepository(ProfileUserEntity)
    private profileUsersRepository: Repository<ProfileUserEntity>,
    @InjectRepository(FishingLogNdEntity)
    private fishingLogRepository: Repository<FishingLogNdEntity>,
    @InjectRepository(CatchingLocationNdEntity)
    private catchingLocationRepository: Repository<CatchingLocationNdEntity>,
    @InjectRepository(VesselEntity)
    private vesselsRepository: Repository<VesselEntity>,
    @InjectRepository(KulitEntity)
    private kulitRepository: Repository<KulitEntity>,
    @InjectRepository(EnjinEntity)
    private enjinRepository: Repository<EnjinEntity>,
    @InjectRepository(ProfileUserVesselEntity)
    private profileUserVesselRepository: Repository<ProfileUserVesselEntity>,
    @InjectRepository(ProfilePengusahaSklEntity)
    private profilePengusahaSklRepository: Repository<ProfilePengusahaSklEntity>,
    @InjectRepository(ApplicationV2ProfileUser)
    private applicationV2ProfileUserRepository: Repository<ApplicationV2ProfileUser>,
    @InjectRepository(JettieEntity)
    private jettiesRepository: Repository<JettieEntity>,
    @InjectRepository(RiverEntity)
    private riversRepository: Repository<RiverEntity>,
    @InjectRepository(KesalahanEntity)
    private kesalahanRepository: Repository<KesalahanEntity>,
    @InjectRepository(ParliamentEntity)
    private parliamentsRepository: Repository<ParliamentEntity>,
    @InjectRepository(ParliamentSeatEntity)
    private parliamentSeatsRepository: Repository<ParliamentSeatEntity>,
    @InjectRepository(DaratHelpAgencyFishermansEntity)
      private readonly daratHelpAgencyFishermansRepository: Repository<DaratHelpAgencyFishermansEntity>,
    @InjectRepository(DaratUserFishermanInfosEntity)
      private readonly daratUserFishermanInfosRepository: Repository<DaratUserFishermanInfosEntity>,


    // Darat
    @InjectRepository(DaratVesselEntity)
        private readonly daratVesselRepository: Repository<DaratVesselEntity>,
    @InjectRepository(DaratVesselInspectionEntity)
      private readonly inspectionRepository: Repository<DaratVesselInspectionEntity>,
    @InjectRepository(DaratVesselEngineEntity)
      private readonly daratEnjinRepository: Repository<DaratVesselEngineEntity>,
    @InjectRepository(DaratVesselHullEntity)
      private readonly hullRepository: Repository<DaratVesselHullEntity>,
    @InjectRepository(DaratApplicationEntity)
      private readonly applicationRepository: Repository<DaratApplicationEntity>,
    @InjectRepository(DaratBaseJettieEntity)
      private readonly daratBaseJettyRepository: Repository<DaratBaseJettieEntity>,
    @InjectRepository(DaratUserEquipmentEntity)
      private readonly daratUserEquipmentRepository: Repository<DaratUserEquipmentEntity>,
    @InjectRepository(CodeMaster)
      private readonly codeMasterRepository: Repository<CodeMaster>,
    
    
  ) {}



    async getProfileUserDetailById(id: string): Promise<ProfileUserDetailsDto | null> {
    // Get specific profile user
    const marinResult = await this.getMarinProfileUserDetailById(id);
    if (marinResult != null) {
      return marinResult;
    } else {
      return await this.getDaratProfileUserDetailById(id);
    }
  }

  async getMarinProfileUserDetailById(id: string): Promise<ProfileUserDetailsDto | null> {
    // Get specific profile user
    console.log(`Fetching profile user with id: ${id}`);
    const user = await this.profileUsersRepository.findOne({
      where: { user_id : id, is_active: 1 }
    });

    if (!user) {
      return null;
    }      

    // Get parliament and parliament seat information
    let dun: string | null = null;
    let parlimen: string | null = null;

    if (user.parliament_seat) {
      console.log('Fetching parliament seat');
      const parliamentSeat = await this.parliamentSeatsRepository.findOne({
        where: { id: user.parliament_seat }
      });
      if (parliamentSeat) {
        dun = parliamentSeat.parliament_seat_name;
        console.log('Fetching parliament');
        const parliament = await this.parliamentsRepository.findOne({
          where: { id: parliamentSeat.parliament_id }
        });
        if (parliament) {
          parlimen = parliament.parliament_name;
        }
      }
    }
    console.log(user.id);
    // Get vessel information
    console.log('Fetching user vessels');
    const userVessels = await this.profileUserVesselRepository
      .createQueryBuilder('puv')
      .select(['puv.profile_user_id', 'puv.vessel_id', 'puv.role', 'puv.status', 'puv.created_at', 'puv.updated_at'])
      .where('puv.profile_user_id = :userId', { userId: user.id })
      .getMany();

    let vessel: VesselEntity | null = null;
    if (userVessels.length > 0) {
      
      vessel = await this.vesselsRepository.findOne({
        where: { id: userVessels[0].vessel_id }
      });
      console.log('Fetching vessel ' + vessel?.no_pendaftaran);
    }

    let kulit : KulitEntity | null = null;
    if (vessel) {
      kulit = await this.kulitRepository.findOne({
        where: { no_pendaftaran : vessel.no_pendaftaran }
      });
      console.log('Fetching kulit details:', JSON.stringify(kulit, null, 2));
    }

    let enjin : EnjinEntity | null = null;
    if (vessel) {
      enjin = await this.enjinRepository.findOne({
        where: { no_pendaftaran : vessel.no_pendaftaran }
      });
      console.log('Fetching enjin details:', JSON.stringify(enjin, null, 2));
    }

    let vesselDetails: {
      noPendaftaran: string | null;
      jenisKulit: string | null;
      panjangMeter: string | null;
      jenamaEnjin: string | null;
      kuasaKuda: number | null;
    } = {
      noPendaftaran: vessel?.vessel_no || null,
      jenisKulit: kulit?.jenis_kulit || null,
      panjangMeter: kulit?.panjang || null,
      jenamaEnjin: enjin?.jenama || null,
      kuasaKuda: enjin?.kuasa_kuda || null,
    };

    // Get SKL information
    console.log('Fetching SKL information');
    const sklInfo = await this.profilePengusahaSklRepository.findOne({
      where: { profile_id: user.id }
    });

    // Get application count
    console.log('Fetching application count');
    const applicationCount = await this.applicationV2ProfileUserRepository
      .createQueryBuilder('avpu')
      .where('avpu.profile_user_id = :userId', { userId: user.id })
      .getCount();

    // Get jeti information (assuming first vessel's pangkalan)
    let jetiKawasan: string | null = null;
    if (vessel?.pangkalan_utama_id) {
      console.log('Fetching jeti information');
      const jeti = await this.jettiesRepository.findOne({
        where: { id: vessel.pangkalan_utama_id.toString() }
      });
      jetiKawasan = jeti?.name || null;
    }
    let catchingLogNds;
    if (user.id) {
      console.log('Fetching catching location information');
      const fishingLogNds = await this.fishingLogRepository.findOne({
        where: { user_id: user.id }
      });
      if(fishingLogNds){
        catchingLogNds = await this.catchingLocationRepository.findOne({
          where: { fishing_log_id : fishingLogNds.fishing_log_id }
        });
      }
      // namaSungai = catchingLogNds?.river_name || null;
    }

    // Get kesalahan information
    console.log('Fetching kesalahan information');
    const kesalahan = await this.kesalahanRepository.findOne({
      where: { no_ic_pesalah: user.icno },
      order: { tarikh: 'DESC' }
    });

    
    console.log(user);
    console.log(vessel);
    console.log(kulit)
    console.log(catchingLogNds)

    return {
      maklumatIndividu: {
        id: user.id,
        name: user.name,
        username: user.icno,
        profile_picture: null, // Assuming no profile picture field
        maklumatAm: {
          email: user.email,
          contact_number: user.no_phone,
          religion: user.religion,
          bumiputera: user.bumiputera_status === 1 ? "Bumiputera" : null,
          OKU: user.oku_status === 1,
          dun: dun,
          parlimen: parlimen
        },
        alamatSemasa: {
          address1: user.address1,
          address2: user.address2,
          address3: user.address3,
          postcode: user.poskod,
          district: user.district,
          state: user.state
        },
        alamatSurat: {
          address1: user.secondary_address_1 || user.address1,
          address2: user.secondary_address_2 || user.address2,
          address3: user.secondary_address_3 || user.address3,
          postcode: parseInt(user.secondary_postcode) || user.poskod,
          district: user.secondary_district || user.district,
          state: user.secondary_state || user.state
        }
      },
      maklumatKewangan: {
        maklumatBank: {
          nama: "KIV", // Placeholder - would need bank info table
          cawangan: "KIV", // Placeholder
          noAkaun: 0 // Placeholder
        },
        maklumatTambahan: {
          penerimaESP: "KIV", // Placeholder
          penerimaBantuan: "KIV", // Placeholder
          pencarumKWSP: "KIV", // Placeholder
          penerimaPencen: "KIV" // Placeholder
        }
      },
      pengkalanPendaratan: {
        namaSungai: catchingLogNds?.river_name || null, // Placeholder fallback
        district: catchingLogNds?.district_name || null,
        kawasan: catchingLogNds?.location_name || null, // Placeholder fallback
        noLesenPeralatan: sklInfo?.no_lesen_skl || "KIV",
        tempohSahLesen: sklInfo?.tarikh_tamat_lesen ? new Date(sklInfo.tarikh_tamat_lesen).toISOString().split('T')[0] : "KIV",
        peralatanUtama: vessel?.peralatan_utama || "KIV", // Placeholder fallback
        peralatanTambahan: "KIV" // Placeholder
      },
      vesel: vessel ? {
        noPendaftaran: vesselDetails.noPendaftaran,
        jenisKulit: vesselDetails.jenisKulit, // Placeholder - would need vessel type table
        panjangMeter: vesselDetails.panjangMeter, // Placeholder - would need vessel dimensions table
        jenamaEnjin: vesselDetails.jenamaEnjin, // Placeholder
        kuasaKuda: vesselDetails.kuasaKuda // Placeholder
      } : {
        noPendaftaran: null, // Placeholder fallback
        jenisKulit: null,
        panjangMeter: null,
        jenamaEnjin: null,
        kuasaKuda: null
      },
      jeti: {
        kawasan: jetiKawasan || "KIV" // Placeholder fallback
      },
      aktivitiPenangkapanIkan: {
        pekerjaanLain: null, // Placeholder
        tempoh: 4, // Placeholder - calculate from license dates
        tahunMula: 2020 // Placeholder
      },
      kesalahan: kesalahan ? {
        akta: kesalahan.akta,
        seksyen: kesalahan.seksyen,
        kesalahan: kesalahan.kesalahan,
        tarikh: new Date(kesalahan.tarikh).toISOString().split('T')[0],
        keputusan: kesalahan.keputusan
      } : {
        akta: null, // Placeholder fallback
        seksyen: null, // Placeholder fallback
        kesalahan: null, // Placeholder fallback
        tarikh: null, // Placeholder fallback
        keputusan:null // Placeholder fallback
      }
    };
  }

    async getDaratProfileUserDetailById(id: string): Promise<ProfileUserDetailsDto | null> {
    // Get specific profile user
    console.log(`Fetching profile user with id: ${id}`);
    const user = await this.profileUsersRepository.findOne({
      where: { user_id : id, is_active: 1 }
    });

    if (!user) {
      return null;
    }
    
    const daratFishermanInfo = await this.daratUserFishermanInfosRepository.findOne({ where: {  user_id : user.id } });
    const daratHelp = await this.daratHelpAgencyFishermansRepository.findOne({ where: { fisherman_info_id: (daratFishermanInfo as any).id } });


    // Get parliament and parliament seat information
    let dun: string | null = null;
    let parlimen: string | null = null;

    if (user.parliament_seat) {
      console.log('Fetching parliament seat');
      const parliamentSeat = await this.parliamentSeatsRepository.findOne({
        where: { id: user.parliament_seat }
      });
      if (parliamentSeat) {
        dun = parliamentSeat.parliament_seat_name;
        console.log('Fetching parliament');
        const parliament = await this.parliamentsRepository.findOne({
          where: { id: parliamentSeat.parliament_id }
        });
        if (parliament) {
          parlimen = parliament.parliament_name;
        }
      }
    }
    console.log(user.id);
    // Get vessel information
    console.log('Fetching user vessels');
    const userVessels = await this.profileUserVesselRepository
      .createQueryBuilder('puv')
      .select(['puv.profile_user_id', 'puv.vessel_id', 'puv.role', 'puv.status', 'puv.created_at', 'puv.updated_at'])
      .where('puv.profile_user_id = :userId', { userId: user.id })
      .getMany();

    let daratVessel: DaratVesselEntity | null = null;
    if (userVessels.length > 0) {
      
      daratVessel = await this.daratVesselRepository.findOne({
        where: { id: userVessels[0].vessel_id }
      });
      console.log('Fetching vessel ' + daratVessel?.registration_number);
    }

    let kulit : KulitEntity | null = null;
    if (daratVessel) {
      kulit = await this.kulitRepository.findOne({
        where: { no_pendaftaran : daratVessel.registration_number }
      });
      console.log('Fetching kulit details:', JSON.stringify(kulit, null, 2));
    }

    let daratEngin : DaratVesselEngineEntity | null = null;
    if (daratVessel) {
      daratEngin = await this.daratEnjinRepository.findOne({
        where: { vessel_id : daratVessel.id }
      });
      console.log('Fetching enjin details:', JSON.stringify(daratEngin, null, 2));
    }

    let vesselDetails: {
      noPendaftaran: string | null;
      jenisKulit: string | null;
      panjangMeter: string | null;
      jenamaEnjin: string | null;
      kuasaKuda: number | null;
    } = {
      noPendaftaran: daratVessel?.registration_number || null,
      jenisKulit: kulit?.jenis_kulit || null,
      panjangMeter: kulit?.panjang || null,
      jenamaEnjin: daratEngin?.brand || null,
      kuasaKuda: daratEngin?.horsepower || null,
    };

    // Get SKL information
    console.log('Fetching SKL information');
    const sklInfo = await this.profilePengusahaSklRepository.findOne({
      where: { profile_id: user.id }
    });

    // Get application count
    console.log('Fetching application count');
    const applicationCount = await this.applicationV2ProfileUserRepository
      .createQueryBuilder('avpu')
      .where('avpu.profile_user_id = :userId', { userId: user.id })
      .getCount();

    // Get jeti information (assuming first vessel's pangkalan)
    const daratBaseJetty = await this.daratBaseJettyRepository.findOne({
      where: { user_id: user.id }
    });
    let jetiKawasan: string | null = null;
    if (daratBaseJetty != null) {
      console.log('Fetching jeti information');
      const jeti = await this.jettiesRepository.findOne({
        where: { id: daratBaseJetty?.jetty_id }
      });
      jetiKawasan = jeti?.name || null;
    }
    let catchingLogNds;
    if (user.id) {
      console.log('Fetching catching location information');
      const fishingLogNds = await this.fishingLogRepository.findOne({
        where: { user_id: user.id }
      });
      if(fishingLogNds){
        catchingLogNds = await this.catchingLocationRepository.findOne({
          where: { fishing_log_id : fishingLogNds.fishing_log_id }
        });
      }
      // namaSungai = catchingLogNds?.river_name || null;
    }

    // Get kesalahan information
    console.log('Fetching kesalahan information');
    const kesalahan = await this.kesalahanRepository.findOne({
      where: { no_ic_pesalah: user.icno },
      order: { tarikh: 'DESC' }
    });

    const peralatanUtama = await this.daratUserEquipmentRepository.findOne({
      where: { user_id: user.id, type : "UTAMA" }
    });

    const peralatanTambahan = await this.daratUserEquipmentRepository.findOne({
      where: { user_id: user.id, type : "TAMBAHAN" }
    });

    
    console.log(user);
    console.log(daratVessel);
    console.log(kulit)
    console.log(catchingLogNds)

    return {
      maklumatIndividu: {
        id: user.id,
        name: user.name,
        username: user.icno,
        profile_picture: null, // Assuming no profile picture field
        maklumatAm: {
          email: user.email,
          contact_number: user.no_phone,
          religion: user.religion,
          bumiputera: user.bumiputera_status === 1 ? "Bumiputera" : null,
          OKU: user.oku_status === 1,
          dun: dun,
          parlimen: parlimen
        },
        alamatSemasa: {
          address1: user.address1,
          address2: user.address2,
          address3: user.address3,
          postcode: user.poskod,
          district: user.district,
          state: user.state
        },
        alamatSurat: {
          address1: user.secondary_address_1 || user.address1,
          address2: user.secondary_address_2 || user.address2,
          address3: user.secondary_address_3 || user.address3,
          postcode: parseInt(user.secondary_postcode) || user.poskod,
          district: user.secondary_district || user.district,
          state: user.secondary_state || user.state
        }
      },
      maklumatKewangan: {
        maklumatBank: {
          nama: "KIV", // Placeholder - would need bank info table
          cawangan: "KIV", // Placeholder
          noAkaun: 0 // Placeholder
        },
        maklumatTambahan: {
          penerimaESP: daratFishermanInfo?.receive_pension ? true : false, // KIV
          penerimaBantuan: daratFishermanInfo?.receive_financial_aid ? true : false, // Placeholder
          pencarumKWSP: daratFishermanInfo?.epf_contributor ? true : false, // Placeholder
          penerimaPencen: daratFishermanInfo?.receive_pension ? true : false // Placeholder
        }
      },
      pengkalanPendaratan: {
        namaSungai: catchingLogNds?.river_name || null, // Placeholder fallback
        district: catchingLogNds?.district_name || null,
        kawasan: catchingLogNds?.location_name || null, // Placeholder fallback
        noLesenPeralatan: sklInfo?.no_lesen_skl || "KIV",
        tempohSahLesen: sklInfo?.tarikh_tamat_lesen ? new Date(sklInfo.tarikh_tamat_lesen).toISOString().split('T')[0] : "KIV",
        peralatanUtama: peralatanUtama?.name as any, // Placeholder fallback
        peralatanTambahan: peralatanTambahan?.name as any // Placeholder
      },
      vesel: daratVessel ? {
        noPendaftaran: vesselDetails.noPendaftaran,
        jenisKulit: vesselDetails.jenisKulit, // Placeholder - would need vessel type table
        panjangMeter: vesselDetails.panjangMeter, // Placeholder - would need vessel dimensions table
        jenamaEnjin: vesselDetails.jenamaEnjin, // Placeholder
        kuasaKuda: vesselDetails.kuasaKuda // Placeholder
      } : {
        noPendaftaran: null, // Placeholder fallback
        jenisKulit: null,
        panjangMeter: null,
        jenamaEnjin: null,
        kuasaKuda: null
      },
      jeti: {
        kawasan: jetiKawasan || null // Placeholder fallback
      },
      aktivitiPenangkapanIkan: {
        pekerjaanLain: null, // Placeholder
        tempoh: 4, // Placeholder - calculate from license dates
        tahunMula: 2020 // Placeholder
      },
      kesalahan: kesalahan ? {
        akta: kesalahan.akta,
        seksyen: kesalahan.seksyen,
        kesalahan: kesalahan.kesalahan,
        tarikh: new Date(kesalahan.tarikh).toISOString().split('T')[0],
        keputusan: kesalahan.keputusan
      } : {
        akta: null, // Placeholder fallback
        seksyen: null, // Placeholder fallback
        kesalahan: null, // Placeholder fallback
        tarikh: null, // Placeholder fallback
        keputusan:null // Placeholder fallback
      }
    };
  }

    async getProfileUserDetails(): Promise<ProfileUserDetailsDto[]> {
    // Get profile users with their basic information
    const profileUsers = await this.profileUsersRepository.find({
      where: { is_active: 1 },
      order: { created_at: 'DESC' }
    });

    console.log(profileUsers);

    const results: ProfileUserDetailsDto[] = [];

    for (const user of profileUsers) {
      // Get parliament and parliament seat information
      let dun: string | null = null;
      let parlimen: string | null = null;

      if (user.parliament_seat) {
        const parliamentSeat = await this.parliamentSeatsRepository.findOne({
          where: { id: user.parliament_seat }
        });
        if (parliamentSeat) {
          dun = parliamentSeat.parliament_seat_name;
          const parliament = await this.parliamentsRepository.findOne({
            where: { id: parliamentSeat.parliament_id }
          });
          if (parliament) {
            parlimen = parliament.parliament_name;
          }
        }
      }

      // Get vessel information
      const userVessels = await this.profileUserVesselRepository
        .createQueryBuilder('puv')
        .select(['puv.profile_user_id', 'puv.vessel_id', 'puv.role', 'puv.status', 'puv.created_at', 'puv.updated_at'])
        .where('puv.profile_user_id = :userId', { userId: user.id })
        .getMany();

      let vessel: VesselEntity | null = null;
      if (userVessels.length > 0) {
        vessel = await this.vesselsRepository.findOne({
          where: { id: userVessels[0].vessel_id }
        });
      }

      // Get SKL information
      const sklInfo = await this.profilePengusahaSklRepository.findOne({
        where: { profile_id: user.id }
      });

      // Get application count
      const applicationCount = await this.applicationV2ProfileUserRepository.count({
        where: { profile_user_id: user.id }
      });

      // Get jeti information (assuming first vessel's pangkalan)
      let jetiKawasan: string | null = null;
      if (vessel?.pangkalan_utama_id) {
        const jeti = await this.jettiesRepository.findOne({
          where: { id: vessel.pangkalan_utama_id.toString() }
        });
        jetiKawasan = jeti?.name || null;
      }

      // Get river information
      let namaSungai: string | null = null;
      if (vessel?.daerah) {
        // Assuming river is linked to district
        const river = await this.riversRepository.findOne({
          where: { district_id: vessel.daerah }
        });
        namaSungai = river?.name || null;
      }

      // Get kesalahan information
      const kesalahan = await this.kesalahanRepository.findOne({
        where: { no_ic_pesalah: user.icno },
        order: { tarikh: 'DESC' }
      });

      results.push({
        maklumatIndividu: {
          id: user.id,
          name: user.name,
          username: user.icno,
          profile_picture: null, // Assuming no profile picture field
          maklumatAm: {
            email: user.email,
            contact_number: user.no_phone,
            religion: user.religion,
            bumiputera: user.bumiputera_status === 1 ? "Bumiputera" : null,
            OKU: user.oku_status === 1,
            dun: dun,
            parlimen: parlimen
          },
          alamatSemasa: {
            address1: user.address1,
            address2: user.address2,
            address3: user.address3,
            postcode: user.poskod,
            district: user.district,
            state: user.state
          },
          alamatSurat: {
            address1: user.secondary_address_1 || user.address1,
            address2: user.secondary_address_2 || user.address2,
            address3: user.secondary_address_3 || user.address3,
            postcode: parseInt(user.secondary_postcode) || user.poskod,
            district: user.secondary_district || user.district,
            state: user.secondary_state || user.state
          }
        },
        maklumatKewangan: {
          maklumatBank: {
            nama: "Bank Islam", // Placeholder - would need bank info table
            cawangan: "Terengganu", // Placeholder
            noAkaun: 12323213123 // Placeholder
          },
          maklumatTambahan: {
            penerimaESP: true, // Placeholder
            penerimaBantuan: true, // Placeholder
            pencarumKWSP: true, // Placeholder
            penerimaPencen: true // Placeholder
          }
        },
        pengkalanPendaratan: {
          namaSungai: namaSungai || "Sungai Terengganu", // Placeholder fallback
          district: vessel?.daerah || user.district,
          kawasan: vessel?.pangkalan || "Pengkalan Seberang Takir", // Placeholder fallback
          noLesenPeralatan: sklInfo?.no_lesen_skl || null,
          tempohSahLesen: sklInfo?.tarikh_tamat_lesen ? new Date(sklInfo.tarikh_tamat_lesen).toISOString().split('T')[0] : null,
          peralatanUtama: vessel?.peralatan_utama || "Pukat", // Placeholder fallback
          peralatanTambahan: "Tiada" // Placeholder
        },
        vesel: vessel ? {
          noPendaftaran: vessel.vessel_no,
          jenisKulit: "Kayu", // Placeholder - would need vessel type table
          panjangMeter: "9.5", // Placeholder - would need vessel dimensions table
          jenamaEnjin: "Yamaha", // Placeholder
          kuasaKuda: 80 // Placeholder
        } : {
          noPendaftaran: "TRF1234N", // Placeholder fallback
          jenisKulit: "Kayu",
          panjangMeter: "9.5",
          jenamaEnjin: "Yamaha",
          kuasaKuda: 80
        },
        jeti: {
          kawasan: jetiKawasan || "Pangkalan Seberang Takir" // Placeholder fallback
        },
        aktivitiPenangkapanIkan: {
          pekerjaanLain: null, // Placeholder
          tempoh: 4, // Placeholder - calculate from license dates
          tahunMula: 2020 // Placeholder
        },
        kesalahan: kesalahan ? {
          akta: kesalahan.akta,
          seksyen: kesalahan.seksyen,
          kesalahan: kesalahan.kesalahan,
          tarikh: new Date(kesalahan.tarikh).toISOString().split('T')[0],
          keputusan: kesalahan.keputusan
        } : {
          akta: "", // Placeholder fallback
          seksyen: "", // Placeholder fallback
          kesalahan: "", // Placeholder fallback
          tarikh: "", // Placeholder fallback
          keputusan: "" // Placeholder fallback
        }
      });
    }

    return results;
  }
}
