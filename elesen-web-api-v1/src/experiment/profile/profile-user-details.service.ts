import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUserEntity } from '../../profile-users/profile-users.entity';
import { VesselEntity } from '../../vessels/vessels.entity';
import { ProfileUserVesselEntity } from '../../profile-user-vessel/profile-user-vessel.entity';
import { ProfilePengusahaSklEntity } from '../../profile-pengusaha-skls/profile-pengusaha-skls.entity';
import { ApplicationV2ProfileUser } from '../../application-v2-profile-user/application-v2-profile-user.entity';
import { JettieEntity } from '../../jetties/jetties.entity';
import { RiverEntity } from '../../rivers/rivers.entity';
import { KesalahanEntity } from '../../kesalahan/kesalahan.entity';
import { ParliamentEntity } from '../../parliaments/parliaments.entity';
import { ParliamentSeatEntity } from '../../parliament-seats/parliament-seats.entity';
import { ProfileUserDetailsDto } from './profile-user-details.dto';

@Injectable()
export class ProfileUserDetailsService {
  constructor(
    @InjectRepository(ProfileUserEntity)
    private profileUsersRepository: Repository<ProfileUserEntity>,
    @InjectRepository(VesselEntity)
    private vesselsRepository: Repository<VesselEntity>,
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
  ) {}

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
            bumiputera_type: user.bumiputera_status === 1 ? "Bumiputera" : null,
            isOKU: user.oku_status === 1,
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
          tempohSahLesen: sklInfo?.tarikh_tamat_lesen?.toISOString().split('T')[0] || null,
          peralatanUtama: vessel?.peralatan_utama || "Pukat", // Placeholder fallback
          peralatanTambahan: "Tiada" // Placeholder
        },
        vesel: vessel ? {
          noPendaftaran: vessel.vessel_no,
          jenisKulit: "Kayu", // Placeholder - would need vessel type table
          panjangMeter: 9.5, // Placeholder - would need vessel dimensions table
          jenamaEnjin: "Yamaha", // Placeholder
          kuasaKuda: 80 // Placeholder
        } : {
          noPendaftaran: "TRF1234N", // Placeholder fallback
          jenisKulit: "Kayu",
          panjangMeter: 9.5,
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
          tarikh: kesalahan.tarikh.toISOString().split('T')[0],
          keputusan: kesalahan.keputusan
        } : {
          akta: "Akta Perikanan 1985", // Placeholder fallback
          seksyen: "Seksyen 15", // Placeholder fallback
          kesalahan: "Memancing di kawasan larangan", // Placeholder fallback
          tarikh: "2025-03-26", // Placeholder fallback
          keputusan: "Denda RM500" // Placeholder fallback
        }
      });
    }

    return results;
  }

  async getProfileUserDetailById(id: string): Promise<ProfileUserDetailsDto | null> {
    // Get specific profile user
    console.log(`Fetching profile user with id: ${id}`);
    const user = await this.profileUsersRepository.findOne({
      where: { id, is_active: 1 }
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
      console.log('Fetching vessel');
      vessel = await this.vesselsRepository.findOne({
        where: { id: userVessels[0].vessel_id }
      });
    }

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

    // Get river information
    let namaSungai: string | null = null;
    if (vessel?.daerah) {
      // Assuming river is linked to district
      console.log('Fetching river information');
      const river = await this.riversRepository.findOne({
        where: { district_id: vessel.daerah }
      });
      namaSungai = river?.name || null;
    }

    // Get kesalahan information
    console.log('Fetching kesalahan information');
    const kesalahan = await this.kesalahanRepository.findOne({
      where: { no_ic_pesalah: user.icno },
      order: { tarikh: 'DESC' }
    });

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
          bumiputera_type: user.bumiputera_status === 1 ? "Bumiputera" : null,
          isOKU: user.oku_status === 1,
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
        tempohSahLesen: sklInfo?.tarikh_tamat_lesen?.toISOString().split('T')[0] || null,
        peralatanUtama: vessel?.peralatan_utama || "Pukat", // Placeholder fallback
        peralatanTambahan: "Tiada" // Placeholder
      },
      vesel: vessel ? {
        noPendaftaran: vessel.vessel_no,
        jenisKulit: "Kayu", // Placeholder - would need vessel type table
        panjangMeter: 9.5, // Placeholder - would need vessel dimensions table
        jenamaEnjin: "Yamaha", // Placeholder
        kuasaKuda: 80 // Placeholder
      } : {
        noPendaftaran: "TRF1234N", // Placeholder fallback
        jenisKulit: "Kayu",
        panjangMeter: 9.5,
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
        tarikh: kesalahan.tarikh.toISOString().split('T')[0],
        keputusan: kesalahan.keputusan
      } : {
        akta: "Akta Perikanan 1985", // Placeholder fallback
        seksyen: "Seksyen 15", // Placeholder fallback
        kesalahan: "Memancing di kawasan larangan", // Placeholder fallback
        tarikh: "2025-03-26", // Placeholder fallback
        keputusan: "Denda RM500" // Placeholder fallback
      }
    };
  }
}