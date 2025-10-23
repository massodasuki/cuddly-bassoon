import { IsString, IsBoolean, IsNumber, IsArray, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { Type, Transform } from 'class-transformer';

// Nested DTOs
export class NoPendaftaranVeselDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diTebuk: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diCat: boolean;
}

export class TandaPenukulBesiDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  tandaBahagianLaluan: boolean;

  @IsString()
  hurufKodTanda: string;
}

export class TinPlateDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  tinPlate: boolean;

  @IsString()
  noTinPlate: string;
}

export class RumahKemudiDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diCat: boolean;

  @IsString()
  kodZon: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diBumbung: boolean;
}

export class PukatTundaBerlesenDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  jalurPutih: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diCat: boolean;
}

export class DimensionDto {
  @IsNumber()
  dalamLesen: number;

  @IsNumber()
  semasaDiperiksa: number;
}

export class VesselImageDto {
  @IsOptional()
  @IsString()
  veselKiriImg?: string;

  @IsOptional()
  @IsString()
  veselKananImg?: string;

  @IsOptional()
  @IsString()
  veselHadapanImg?: string;

  @IsOptional()
  @IsString()
  veselBelakangImg?: string;

  @IsOptional()
  @IsString()
  veselKeseluruhanImg?: string;
}

export class UkuranDimensiVeselDto {
  @ValidateNested()
  @Type(() => DimensionDto)
  panjangMeter: DimensionDto;

  @ValidateNested()
  @Type(() => DimensionDto)
  lebarMeter: DimensionDto;

  @ValidateNested()
  @Type(() => DimensionDto)
  kedalamanMeter: DimensionDto;

  @ValidateNested()
  @Type(() => DimensionDto)
  muatanGRT: DimensionDto;

  @ValidateNested()
  @Type(() => VesselImageDto)
  image: VesselImageDto;
}

export class MaklumatEnjinDto {
  @IsString()
  jenama: string;

  @IsString()
  model: string;

  @IsString()
  turbo: string;

  @IsNumber()
  kuasaKuda: number;

  @IsString()
  noEnjin: string;

  @IsString()
  penandaVesel: string;
}

export class EngineImageDto {
  @IsOptional()
  @IsString()
  enjinImg?: string;

  @IsOptional()
  @IsString()
  noEnjinImg?: string;

  @IsOptional()
  @IsString()
  penandaEnjinImg?: string;

  @IsOptional()
  @IsString()
  turboImg?: string;

  @IsOptional()
  @IsString()
  generatorImg?: string;
}

export class EnjinDto {
  @ValidateNested()
  @Type(() => MaklumatEnjinDto)
  maklumatEnjin: MaklumatEnjinDto;

  @ValidateNested()
  @Type(() => EngineImageDto)
  image: EngineImageDto;
}

export class SafetyEquipmentDto {
  @IsString()
  status: string;

  @IsString()
  kuantiti: string;

  @IsString()
  keadaan: string;
}

export class SafetyImageDto {
  @IsOptional()
  @IsString()
  MTUImg?: string;

  @IsOptional()
  @IsString()
  AISImg?: string;
}

export class PeralatanKeselamatanDto {
  @ValidateNested()
  @Type(() => SafetyEquipmentDto)
  jaketKeselamatan: SafetyEquipmentDto;

  @ValidateNested()
  @Type(() => SafetyEquipmentDto)
  boyaKeselamatan: SafetyEquipmentDto;

  @ValidateNested()
  @Type(() => SafetyEquipmentDto)
  alatPemadamApi: SafetyEquipmentDto;

  @ValidateNested()
  @Type(() => SafetyEquipmentDto)
  rakitKeselamatan: SafetyEquipmentDto;

  @ValidateNested()
  @Type(() => SafetyEquipmentDto)
  radioWireless: SafetyEquipmentDto;

  @ValidateNested()
  @Type(() => SafetyImageDto)
  image: SafetyImageDto;
}

export class KelengkapanMenangkapIkanDto {
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
  petakIkan: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  RSW: boolean;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  CCTV: boolean;
}

export class PeralatanDto {
  @IsString()
  nama: string;

  @IsString()
  jenisPeralatan: string;

  @IsString()
  panjangMeter: string;

  @IsString()
  tarikDilesen: string;

  @IsString()
  status: string;
}

export class KeadaanVeselDto {
  @IsString()
  keadaanSemasa: string;

  @IsString()
  vesel: string;

  @IsString()
  jenisKulit: string;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  veselBaharu: boolean;
}

export class OfficerSignatureImageDto {
  @IsOptional()
  @IsString()
  tandaTanganPembantuImg?: string;

  @IsOptional()
  @IsString()
  tandatanganPegawaiImg?: string;
}

export class PerakuanPegawaiDto {
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  diSokong: boolean;

  @IsString()
  tarikhPemeriksaan: string;

  @ValidateNested()
  @Type(() => OfficerSignatureImageDto)
  image: OfficerSignatureImageDto;
}

export class OwnerSignatureImageDto {
  @IsOptional()
  @IsString()
  tandaTanganEmpunyaVeselImg?: string;
}

export class PerakuanEmpunyaVeselDto {
  @IsString()
  jenisPermohonan: string;

  @IsString()
  tarikhPemeriksaan: string;

  @ValidateNested()
  @Type(() => OwnerSignatureImageDto)
  image: OwnerSignatureImageDto;
}

export class CreateDaratVeselLpiFormDto {
   @IsString()
   noVesel: string;

   @IsOptional()
   @IsString()
   vesselId?: string;

   @IsOptional()
   @IsString()
   applicationId?: string;

   @IsOptional()
   @IsString()
   userId?: string;

   @IsOptional()
   @IsString()
   inspectedBy?: string;

   @IsOptional()
   @IsString()
   createdBy?: string;

   @IsOptional()
   @IsString()
   updatedBy?: string;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => NoPendaftaranVeselDto)
  noPendaftaranVesel: NoPendaftaranVeselDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => TandaPenukulBesiDto)
  tandaPenukulBesi: TandaPenukulBesiDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => TinPlateDto)
  tinPlate: TinPlateDto;

  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  pakuPenandaLebar: boolean;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => RumahKemudiDto)
  rumahKemudi: RumahKemudiDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => PukatTundaBerlesenDto)
  pukatTundaBerlesen: PukatTundaBerlesenDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => UkuranDimensiVeselDto)
  ukuranDimensiVesel: UkuranDimensiVeselDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => EnjinDto)
  enjin: EnjinDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => PeralatanKeselamatanDto)
  peralatanKeselamatan: PeralatanKeselamatanDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => KelengkapanMenangkapIkanDto)
  kelengkapanMenangkapIkan: KelengkapanMenangkapIkanDto;

  @Transform(({ value }) => {
    if (typeof value === 'string') {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    }
    return value;
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PeralatanDto)
  peralatan: PeralatanDto[];

  @IsString()
  jenisPeralatanSemasa: string;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => KeadaanVeselDto)
  keadaanVesel: KeadaanVeselDto;

  @IsString()
  tarikhPemeriksaan: string;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => PerakuanPegawaiDto)
  perakuanPegawai: PerakuanPegawaiDto;

  @Transform(({ value }) => typeof value === 'string' ? JSON.parse(value) : value)
  @ValidateNested()
  @Type(() => PerakuanEmpunyaVeselDto)
  perakuanEmpunyaVesel: PerakuanEmpunyaVeselDto;
}