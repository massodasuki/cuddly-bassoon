import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async findAll(): Promise<ProfileDto[]> {
    const profiles = await this.profileRepository.find();
    return profiles.map(profile => this.mapToDto(profile));
  }

  async findOne(maklumatIndividuId: string): Promise<ProfileDto> {
    const profile = await this.profileRepository.findOne({
      where: { maklumatIndividu: { id: maklumatIndividuId } },
      relations: [
        'maklumatIndividu',
        'maklumatIndividu.maklumatAm',
        'maklumatIndividu.alamatSemasa',
        'maklumatIndividu.alamatSurat',
        'maklumatKewangan',
        'maklumatKewangan.maklumatBank',
        'maklumatKewangan.maklumatTambahan',
        'pengkalanPendaratan',
        'vessel',
        'jeti',
        'aktivitiPenangkapanIkan',
        'kesalahan',
      ],
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return this.mapToDto(profile);
  }

  private mapToDto(profile: Profile): ProfileDto {
    return {
      maklumatIndividu: {
        id: profile.maklumatIndividu.id,
        name: profile.maklumatIndividu.name,
        username: profile.maklumatIndividu.username,
        profile_picture: profile.maklumatIndividu.profilePicture,
        maklumatAm: {
          email: profile.maklumatIndividu.maklumatAm.email,
          contact_number: profile.maklumatIndividu.maklumatAm.contactNumber,
          religion: profile.maklumatIndividu.maklumatAm.religion,
          bumiputera_type: profile.maklumatIndividu.maklumatAm.bumiputeraType,
          isOKU: profile.maklumatIndividu.maklumatAm.isOKU,
          dun: profile.maklumatIndividu.maklumatAm.dun,
          parlimen: profile.maklumatIndividu.maklumatAm.parlimen,
        },
        alamatSemasa: {
          address1: profile.maklumatIndividu.alamatSemasa.address1,
          address2: profile.maklumatIndividu.alamatSemasa.address2,
          address3: profile.maklumatIndividu.alamatSemasa.address3,
          postcode: profile.maklumatIndividu.alamatSemasa.postcode,
          district: profile.maklumatIndividu.alamatSemasa.district,
          state: profile.maklumatIndividu.alamatSemasa.state,
        },
        alamatSurat: {
          address1: profile.maklumatIndividu.alamatSurat.address1,
          address2: profile.maklumatIndividu.alamatSurat.address2,
          address3: profile.maklumatIndividu.alamatSurat.address3,
          postcode: profile.maklumatIndividu.alamatSurat.postcode,
          district: profile.maklumatIndividu.alamatSurat.district,
          state: profile.maklumatIndividu.alamatSurat.state,
        },
      },
      maklumatKewangan: {
        maklumatBank: {
          nama: profile.maklumatKewangan.maklumatBank.nama,
          cawangan: profile.maklumatKewangan.maklumatBank.cawangan,
          noAkaun: profile.maklumatKewangan.maklumatBank.noAkaun,
        },
        maklumatTambahan: {
          penerimaESP: profile.maklumatKewangan.maklumatTambahan.penerimaESP,
          penerimaBantuan: profile.maklumatKewangan.maklumatTambahan.penerimaBantuan,
          pencarumKWSP: profile.maklumatKewangan.maklumatTambahan.pencarumKWSP,
          penerimaPencen: profile.maklumatKewangan.maklumatTambahan.penerimaPencen,
        },
      },
      pengkalanPendaratan: {
        namaSungai: profile.pengkalanPendaratan.namaSungai,
        district: profile.pengkalanPendaratan.district,
        kawasan: profile.pengkalanPendaratan.kawasan,
        noLesenPeralatan: profile.pengkalanPendaratan.noLesenPeralatan,
        tempohSahLesen: profile.pengkalanPendaratan.tempohSahLesen,
        peralatanUtama: profile.pengkalanPendaratan.peralatanUtama,
        peralatanTambahan: profile.pengkalanPendaratan.peralatanTambahan,
      },
      vesel: {
        noPendaftaran: profile.vessel.noPendaftaran,
        jenisKulit: profile.vessel.jenisKulit,
        panjangMeter: profile.vessel.panjangMeter,
        jenamaEnjin: profile.vessel.jenamaEnjin,
        kuasaKuda: profile.vessel.kuasaKuda,
      },
      jeti: {
        kawasan: profile.jeti.kawasan,
      },
      aktivitiPenangkapanIkan: {
        pekerjaanLain: profile.aktivitiPenangkapanIkan.pekerjaanLain,
        tempoh: profile.aktivitiPenangkapanIkan.tempoh,
        tahunMula: profile.aktivitiPenangkapanIkan.tahunMula,
      },
      kesalahan: {
        akta: profile.kesalahan.akta,
        seksyen: profile.kesalahan.seksyen,
        kesalahan: profile.kesalahan.kesalahan,
        tarikh: profile.kesalahan.tarikh?.toISOString().split('T')[0],
        keputusan: profile.kesalahan.keputusan,
      },
    };
  }
}