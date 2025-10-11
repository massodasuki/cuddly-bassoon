import { MaklumatIndividuDto } from './maklumat-individu.dto';
import { MaklumatKewanganDto } from './maklumat-kewangan.dto';
import { PengkalanPendaratanDto } from './pengkalan-pendaratan.dto';
import { VesselDto } from './vessel.dto';
import { JetiDto } from './jeti.dto';
import { AktivitiPenangkapanIkanDto } from './aktiviti-penangkapan-ikan.dto';
import { KesalahanDto } from './kesalahan.dto';

export class ProfileDto {
  maklumatIndividu: MaklumatIndividuDto;
  maklumatKewangan: MaklumatKewanganDto;
  pengkalanPendaratan: PengkalanPendaratanDto;
  vesel: VesselDto; // note: in JSON it's "vesel", probably typo
  jeti: JetiDto;
  aktivitiPenangkapanIkan: AktivitiPenangkapanIkanDto;
  kesalahan: KesalahanDto;
}