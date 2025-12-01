import { IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDaratVeselLpiFormDto {
  @IsString()
  userId: string;

  @IsString()
  vesselId: string;

  @IsString()
  applicationId: string;

  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;

  @IsString()
  noVesel: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  noVesel_ditebuk: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  noVesel_dicat: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  noVesel_diBumbung: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  tandaBahagianLaluan: boolean;

  @IsString()
  hurufKodTanda: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  tinPlate: boolean;

  @IsString()
  noTinPlate: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  pakuPenandaLebar: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  rumahKemudi_ditebuk: boolean;

  @IsString()
  kodZon: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  rumahKemudi_diBumbung: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  jalurPutih: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  pukatTundaBerlesen_dicat: boolean;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  panjangMeter_dalamLesen: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  panjangMeter_semasaDiperiksa: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  lebarMeter_dalamLesen: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  lebarMeter_semasaDiperiksa: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  kedalamanMeter_dalamLesen: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  kedalamanMeter_semasaDiperiksa: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  muatanGRT_dalamLesen: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  muatanGRT_semasaDiperiksa: number;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isNoPEV: boolean;

  @IsString()
  noPEV: string;

  @IsString()
  jenama_dalamLesen: string;

  @IsString()
  jenama_semasaDiperiksa: string;

  @IsString()
  model_dalamLesen: string;

  @IsString()
  model_semasaDiperiksa: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  kuasaKuda_dalamLesen: number;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  kuasaKuda_semasaDiperiksa: number;

  @IsString()
  noEnjin_dalamLesen: string;

  @IsString()
  noEnjin_semasaDiperiksa: string;

  @IsString()
  veselKeseluruhanImg: string;

  @IsString()
  enjinImg: string;

  @IsString()
  noEnjinImg: string;

  @IsString()
  penandaEnjinImg: string;

  @IsString()
  turboImg: string;

  @IsString()
  generatorImg: string;

  @IsString()
  pelampungKeselamatan_status: string;

  @IsString()
  pelampungKeselamatan_keadaan: string;

  @IsString()
  pelampungKeselamatan_kuantiti: string;

  @IsString()
  boyaKeselamatan_status: string;

  @IsString()
  boyaKeselamatan_keadaan: string;

  @IsString()
  boyaKeselamatan_kuantiti: string;

  @IsString()
  alatPemadamApi_status: string;

  @IsString()
  alatPemadamApi_keadaan: string;

  @IsString()
  alatPemadamApi_kuantiti: string;

  @IsString()
  lampuPelayaran_status: string;

  @IsString()
  lampuPelayaran_keadaan: string;

  @IsString()
  lampuPelayaran_kuantiti: string;

  @IsString()
  rakitKeselamatan_status: string;

  @IsString()
  rakitKeselamatan_keadaan: string;

  @IsString()
  rakitKeselamatan_kuantiti: string;

  @IsString()
  mtu_status: string;

  @IsString()
  mtu_keadaan: string;

  @IsString()
  mtu_kuantiti: string;

  @IsString()
  ais_status: string;

  @IsString()
  ais_keadaan: string;

  @IsString()
  ais_kuantiti: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  GPS: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  echoSounder: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  radar: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  satNavigation: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  sonar: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  fishFinder: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  radioWireless: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  ATUR: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  netHouler: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  powerBlock: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  netDrum: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  RSW: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  CCTV: boolean;

  @IsString()
  peralatan_utama: string;

  @IsString()
  peralatan_tambahan: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  sizeMataPukat: number;

  @IsString()
  peralatan_dijumpai: string;

  @IsString()
  keadaanVeselSemasa: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  veselAsal: boolean;

  @IsString()
  jenisKulitVesel: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  veselBaru: boolean;

  @IsString()
  tarikhPemeriksaan: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  permohonan_diSokong: boolean;

  @IsString()
  permohonan_tarikhPemeriksaan: string;

  @IsString()
  tandaTanganPembantuImg: string;

  @IsString()
  tandatanganPegawaiImg: string;

  @IsString()
  jenisPermohonan: string;

  @IsString()
  perakuanPemilik_tarikhPemeriksaan: string;

  @IsString()
  tandaTanganEmpunyaVeselImg: string;
}