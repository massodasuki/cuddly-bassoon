import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResponseDto } from './dto/profile-response.dto';
import { ProfileDto } from './dto/profile.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Profile')
@Controller('/api/v1/applications/profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Get all profiles' })
  @ApiResponse({
    status: 200,
    description: 'List of all profiles',
    type: ProfileResponseDto,
  })
  async findAll(): Promise<ProfileResponseDto> {
    const data = await this.profileService.findAll();
    return { data };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get profile by MaklumatIndividu ID' })
  @ApiParam({ name: 'id', description: 'MaklumatIndividu ID', type: String })
  @ApiResponse({
    status: 200,
    description: 'Profile data for the specified MaklumatIndividu ID',
    type: ProfileDto,
    schema: {
      example: {
        maklumatIndividu: {
          id: '0001ccba-67e3-476a-8b06-91701bb863d0',
          name: 'CHE AZHARI ZIHNI BIN NIK JEMADIN',
          username: '950915302569',
          profile_picture: null,
          maklumatAm: {
            email: 'lorim99247@hazhab.com',
            contact_number: null,
            religion: null,
            bumiputera_type: null,
            isOKU: false,
            dun: 'Manir',
            parlimen: 'Kuala Terengganu',
          },
          alamatSemasa: {
            address1: 'No 1, Jalan 2, Taman Permata',
            address2: null,
            address3: null,
            postcode: 20300,
            district: 'Kuala Terengganu',
            state: 'Terengganu',
          },
          alamatSurat: {
            address1: 'No 1, Jalan 2, Taman Permata',
            address2: null,
            address3: null,
            postcode: 20300,
            district: 'Kuala Terengganu',
            state: 'Terengganu',
          },
        },
        maklumatKewangan: {
          maklumatBank: {
            nama: 'Bank Islam',
            cawangan: 'Terengganu',
            noAkaun: 12323213123,
          },
          maklumatTambahan: {
            penerimaESP: true,
            penerimaBantuan: true,
            pencarumKWSP: true,
            penerimaPencen: true,
          },
        },
        pengkalanPendaratan: {
          namaSungai: 'Sungai Terengganu',
          district: 'Kuala Terengganu',
          kawasan: 'Pengkalan Seberang Takir',
          noLesenPeralatan: null,
          tempohSahLesen: null,
          peralatanUtama: 'Pukat',
          peralatanTambahan: 'Tiada',
        },
        vesel: {
          noPendaftaran: 'TRF1234N',
          jenisKulit: 'Kayu',
          panjangMeter: 9.5,
          jenamaEnjin: 'Yamaha',
          kuasaKuda: 80,
        },
        jeti: {
          kawasan: 'Pangkalan Seberang Takir',
        },
        aktivitiPenangkapanIkan: {
          pekerjaanLain: null,
          tempoh: 4,
          tahunMula: 2020,
        },
        kesalahan: {
          akta: 'Akta Perikanan 1985',
          seksyen: 'Seksyen 15',
          kesalahan: 'Memancing di kawasan larangan',
          tarikh: '2025-03-26',
          keputusan: 'Denda RM500',
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  async findOne(@Param('id') id: string): Promise<ProfileDto> {
    return this.profileService.findOne(id);
  }
}