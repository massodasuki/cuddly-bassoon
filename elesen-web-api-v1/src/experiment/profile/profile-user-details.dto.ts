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
  religion: string | null;
  bumiputera_type: string | null;
  isOKU: boolean;
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
  penerimaESP: boolean;
  penerimaBantuan: boolean;
  pencarumKWSP: boolean;
  penerimaPencen: boolean;
}

export class MaklumatKewanganDto {
  maklumatBank: MaklumatBankDto;
  maklumatTambahan: MaklumatTambahanDto;
}

export class PengkalanPendaratanDto {
  namaSungai: string;
  district: string;
  kawasan: string;
  noLesenPeralatan: string | null;
  tempohSahLesen: string | null;
  peralatanUtama: string;
  peralatanTambahan: string;
}

export class VeseIDto {
  noPendaftaran: string;
  jenisKulit: string;
  panjangMeter: number;
  jenamaEnjin: string;
  kuasaKuda: number;
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
  akta: string;
  seksyen: string;
  kesalahan: string;
  tarikh: string;
  keputusan: string;
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