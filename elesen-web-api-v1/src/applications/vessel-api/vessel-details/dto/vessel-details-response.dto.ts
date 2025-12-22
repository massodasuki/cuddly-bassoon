export class MaklumatAmVeselDto {
  noPendaftaranVesel: string;
  noGeran: string | null;
  noPatilKekal: string;
  tarikhDaftar: string;
  lokasiPembinaanVesel: string;
  negaraAsal: string;
  pemasanganMTU: boolean;
  noPendaftaranMTU: string | null;
  hakMilik: string;
  kodRFIDQR: string;
  pengkalanUtama: boolean;
  pelabuhanUtama: string;
  pelabuhanTambahan: string;
}

export class LesenDto {
  noLesen: string;
  tarikhMula: string;
  tarikhTamat: string;
  zon: string;
  noPatil: string;
  status: string;
  statusIUUU: string;
}

export class KulitDto {
  tarikhDilesen: string;
  panjangMeter: number;
  lebarMeter: number;
  kedalamanMeter: number;
  muatanGRT: number;
  status: string;
  tindakan: string | null;
}

export class MaklumatAmEnjinDto {
  jenisEnjin: string;
  bahanApi: string;
  jenamaEnjin: string;
  kuasaKuda: number;
  noEnjin: string;
  model: string;
  turbo: string;
  tarikhPEV: string;
  kategoriEnjin: string;
  status: string;
}

export class GambarEnjinDto {
  enjinUrl: string;
  noEnjinUrl: string;
  penandaPEVUrl: string;
  turboUrl: string;
  generatorUrl: string;
}

export class EnjinDto {
  maklumatAmEjin: MaklumatAmEnjinDto;
  gambar: GambarEnjinDto;
}

export class PeralatanDto {
  nama: string;
  jenisPeralatan: string;
  kuantiti: number | null;
  tarikDilesen: string;
  status: string;
}

export class KruDto {
  noKadPendaftaran: string;
  nama: string;
  negara: string;
  noKadPengenalan: string;
  jawatan: string;
}

export class PengkalanDto {
  noRujukanPengkalan: string;
  namaPengkalan: string;
  jenisPengkalan: string;
  district: string;
  state: string;
  tahunMula: string;
  status: string;
}

export class PemilikanDto {
  namaPemilik: string;
  noKadPengenalan: string;
  jenisPemilikan: string;
  district: string;
  state: string;
  tarikhPemilikan: string;
  status: string;
}

export class RumahKemudiDto {
  diCatBetul: boolean ;
  diCatTerang: boolean;
  kodZon: string | null;
  diAtasBumbung: boolean;
}

export class TandaPenukulBesiDto {
  tandaBahagianLaluan: boolean;
  hurufKodTanda: string | null;
}

export class NoPendaftaranVeselDto {
  diTebuk: boolean;
  diCat: boolean;
}

export class QRCodeDto {
  diPasang: boolean;
  gambar: string;
}

export class UkuranDimensiVeselDto {
  panjangMeter: number;
  lebarMeter: number;
  kedalamanMeter: number;
  muatanGRT: number;
}

export class UkuranGeometriVeselDto {
  a: number | null;
  b: number | null;
  c: number | null;
  d: number | null;
  e: number | null;
  f: number | null;
}

export class GambarVeselDto {
  kiri: string;
  kanan: string;
  hadapan: string;
  belakang: string;
  keseluruhan: string;
}

export class MaklumatVeselDto {
  pakuPenandaLebar: string | null;
  rumahKemudi: RumahKemudiDto;
  tandaPenukulBesi: TandaPenukulBesiDto;
  noPendaftaranVesel: NoPendaftaranVeselDto;
  QRCode: QRCodeDto;
  ukuranDimensiVesel: UkuranDimensiVeselDto;
  ukuranGeometriVesel: UkuranGeometriVeselDto;
  gambar: GambarVeselDto;
}

export class MaklumatEnjinDto {
  jenama: string;
  model: string;
  turbo: string | null;
  kuasaKuda: number;
  noEnjin: string;
  penandaVesel: string;
}

export class GambarEnjinPematuhanDto {
  enjinUrl: string;
  noEnjinUrl: string;
  penandaEnjinUrl: string;
  turboUrl: string;
  generatorUrl: string;
}

export class EnjinPematuhanDto {
  maklumatEnjin: MaklumatEnjinDto;
  gambar: GambarEnjinPematuhanDto;
}

export class LampuPelayaranDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class MTUPelayaranDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class AISDto {
  status: string;
  keadaan: string;
}

export class CCTVDto {
  status: string;
  keadaan: string;
}

export class GPSDto {
  status: string;
}

export class GambarPelayaranDto {
  MTUUrl: string;
  AISUrl: string;
  lampuPelayaranUrl: string;
  QRCodeUrl: string;
}

export class PeralatanPelayaranDto {
  lampuPelayaran: LampuPelayaranDto;
  MTU: MTUPelayaranDto;
  AIS: AISDto;
  CCTV: CCTVDto;
  GPS: GPSDto;
  gambar: GambarPelayaranDto;
}

export class JaketKeselamatanDto {
  status: string | null;
  kuantiti: string | null;
  keadaan: string;
}

export class BoyaKeselamatanDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class AlatPemadamApiDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class RakitKeselamatanDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class RadioWirelessDto {
  status: string;
  kuantiti: string;
  keadaan: string;
}

export class GambarKeselamatanDto {
  MTUUrl: string;
  AISUrl: string;
}

export class PeralatanKeselamatanDto {
  jaketKeselamatan: JaketKeselamatanDto;
  boyaKeselamatan: BoyaKeselamatanDto;
  alatPemadamApi: AlatPemadamApiDto;
  rakitKeselamatan: RakitKeselamatanDto;
  radioWireless: RadioWirelessDto;
  gambar: GambarKeselamatanDto;
}

export class KelengkapanMenangkapIkanDto {
  echoSounder: boolean;
  sonar: boolean;
  netHouler: boolean;
  powerBlock: boolean;
  petakIkan: boolean;
  RSW: boolean;
}

export class DokumenDto {
  generalAgreementUrl: string;
  vesselMarkingUrl: string;
  laporanPemeriksaanKejuruteraanUrl: string;
  laporanPemeriksaanSurveyorUrl: string;
  certOfRegistrationUrl: string;
  gearMakingUrl: string;
  hygeineOnBoardUrl: string;
  internationalOilPollutionPreventionCertUrl: string;
  internationalTonnageCertUrl: string;
  sijilKompetensiKakitanganUrl: string;
  sijilPeralatanKeselmatanUrl: string;
}

export class PematuhanDto {
  maklumatVesel: MaklumatVeselDto;
  enjin: EnjinPematuhanDto;
  peralatanPelayaran: PeralatanPelayaranDto;
  peralatanKeselamatan: PeralatanKeselamatanDto;
  kelengkapanMenangkapIkan: KelengkapanMenangkapIkanDto;
  dokumen: DokumenDto;
}

export class KesalahanDto {
  nama: string;
  noKadPengenalan: string;
  akta: string;
  seksyen: string;
  kesalahan: string;
  tarikh: string;
  keputusan: string;
}

export class PendaftaranAntarabangsaDto {
  namaVesel: string | null;
  noPendaftaran: string;
  noIRCS: string;
  noIMO: string;
  zonPenangkapan: string;
  spesisSasaran: string;
}

export class ProfilVeselDto {
  maklumatAmVesel: MaklumatAmVeselDto;
  lesen: LesenDto;
  kulit: KulitDto;
  enjin: EnjinDto;
  peralatan: PeralatanDto[];
  kru: KruDto[];
  pengkalan: PengkalanDto[];
  pemilikan: PemilikanDto;
  pematuhan: PematuhanDto;
  kesalahan: KesalahanDto;
  pendaftaranAntarabangsa: PendaftaranAntarabangsaDto;
}

export class VesselDetailsResponseDto {
  data: ProfilVeselDto[];
}

export class PemilikanSimplifiedDto {
  namaPemilik: string;
  noKadPengenalan: string;
}

export class NakhodaDto {
  namaNakhoda: string;
  noKadPengenalan: string;
}

export class VesselOwnershipCaptainResponseDto {
  noVessel : string;
  pemilikan: PemilikanSimplifiedDto;
  nakhoda: NakhodaDto;
}
