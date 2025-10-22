import { ApiProperty } from '@nestjs/swagger';
import { MaklumatAmVeselDto } from './maklumat-am-vesel.dto';
import { LesenDto } from './lesen.dto';
import { KulitDto } from './kulit.dto';
import { EnjinDto } from './enjin.dto';
import { PeralatanDto } from './peralatan.dto';
import { KruDto } from './kru.dto';
import { PengkalanDto } from './pengkalan.dto';
import { PemilikanDto } from './pemilikan.dto';
import { PematuhanDto } from './pematuhan.dto';
import { KesalahanDto } from './kesalahan.dto';
import { PendaftaranAntarabangsaDto } from './pendaftaran-antarabangsa.dto';

export class ProfilVeselDto {
  @ApiProperty({
    example: {
      maklumatAmVesel: {},
      lesen: {},
      kulit: {},
      enjin: { maklumatAmEnjin: {}, gambar: [] },
      peralatan: [],
      kru: [],
      pengkalan: [],
      pemilikan: {},
      pematuhan: null,
      kesalahan: {},
      pendaftaranAntarabangsa: {}
    }
  })
  profilVesel: {
    maklumatAmVesel: MaklumatAmVeselDto;
    lesen: LesenDto;
    kulit: KulitDto;
    enjin: EnjinDto;
    peralatan: PeralatanDto[];
    kru: KruDto[];
    pengkalan: PengkalanDto[];
    pemilikan: PemilikanDto;
    pematuhan?: PematuhanDto | null;
    kesalahan: KesalahanDto;
    pendaftaranAntarabangsa: PendaftaranAntarabangsaDto;
  };
}