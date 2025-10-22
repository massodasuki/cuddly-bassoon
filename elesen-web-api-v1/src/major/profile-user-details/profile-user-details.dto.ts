import { CodeMaster } from "../code-masters/code-masters.entity";

export class AlamatDto {
  address1: string;
  address2: string | null;
  address3: string | null;
  postcode: number;
  district: string;
  state: string;
}

export class MaklumatAmDto {
  email: string;
  contact_number: string | null;
  religion: CodeMaster | null;
  bumiputera: string | null;
  OKU: boolean;
  dun: string | null;
  parlimen: string | null;
}

export class MaklumatIndividuDto {
  id: string;
  name: string;
  username: string;
  profile_picture: string | null;
  maklumatAm: MaklumatAmDto;
  alamatSemasa: AlamatDto;
  alamatSurat: AlamatDto;
}

export class MaklumatBankDto {
  nama: string;
  cawangan: string;
  noAkaun: number;
}

export class MaklumatTambahanDto {
  penerimaESP: boolean | string;
  penerimaBantuan: boolean | string;
  pencarumKWSP: boolean | string;
  penerimaPencen: boolean | string;
}

export class MaklumatKewanganDto {
  maklumatBank: MaklumatBankDto;
  maklumatTambahan: MaklumatTambahanDto;
}

export class PengkalanPendaratanDto {
  namaSungai: string | null;
  district: string | null;
  kawasan: string | null ;
  noLesenPeralatan: string | null;
  tempohSahLesen: string | null;
  peralatanUtama: string;
  peralatanTambahan: string;
}

export class VeseIDto {
  noPendaftaran: string | null;
  jenisKulit: string | null;
  panjangMeter: number | null;
  jenamaEnjin: string | null;
  kuasaKuda: number | null;
}

export class JetiDto {
  kawasan: string;
}

export class AktivitiPenangkapanIkanDto {
  pekerjaanLain: string | null;
  tempoh: number;
  tahunMula: number;
}

export class KesalahanDto {
  akta: string | null;
  seksyen: string | null;
  kesalahan: string | null;
  tarikh: string | null;
  keputusan: string | null;
}

export class ProfileUserDetailsDto {
  maklumatIndividu: MaklumatIndividuDto;
  maklumatKewangan: MaklumatKewanganDto;
  pengkalanPendaratan: PengkalanPendaratanDto;
  vesel: VeseIDto;
  jeti: JetiDto;
  aktivitiPenangkapanIkan: AktivitiPenangkapanIkanDto;
  kesalahan: KesalahanDto;
}