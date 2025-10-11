import { IsBoolean, IsString, IsDateString, IsArray, IsObject, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NoPendaftaranVeselDto {
  @IsBoolean()
  diTebuk: boolean;

  @IsBoolean()
  diCat: boolean;
}

export class TandaPenukulBesiDto {
  @IsBoolean()
  tandaBahagianLaluan: boolean;

  @IsOptional()
  @IsString()
  hurufKodTanda?: string;
}

export class TinPlateDto {
  @IsBoolean()
  tinPlate: boolean;

  @IsString()
  noTinePlate: string;
}

export class RumahKemudiDto {
  @IsBoolean()
  diCat: boolean;

  @IsString()
  kodZon: string;

  @IsBoolean()
  diBumbung: boolean;
}

export class PukatTundaBerlesenDto {
  @IsBoolean()
  jalurPutih: boolean;

  @IsBoolean()
  diCat: boolean;
}

export class UkuranDimensiVeselDto {
  @IsObject()
  panjangMeter: {
    dalamLesen: number;
    semasaDiperiksa: number;
  };

  @IsObject()
  lebarMeter: {
    dalamLesen: number;
    semasaDiperiksa: number;
  };

  @IsObject()
  kedalamanMeter: {
    dalamLesen: number;
    semasaDiperiksa: number;
  };

  @IsObject()
  muatanGRT: {
    dalamLesen: number;
    semasaDiperiksa: number;
  };

  @IsObject()
  image: {
    kiri: string;
    kanan: string;
    hadapan: string;
    belakang: string;
    keseluruhan: string;
  };
}

export class EnjinDto {
  @IsObject()
  maklumatEnjin: {
    jenama: string;
    model: string;
    turbo?: string;
    kuasaKuda: number;
    noEnjin: string;
    penandaVesel: string;
  };

  @IsObject()
  image: {
    enjinUrl: string;
    noEnjinUrl: string;
    penandaEnjinUrl: string;
    turboUrl: string;
    generatorUrl: string;
  };
}

export class PeralatanKeselamatanDto {
  @IsObject()
  jaketKeselamatan: {
    status: string;
    kuantiti: string;
    keadaan: string;
  };

  @IsObject()
  boyaKeselamatan: {
    status: string;
    kuantiti: string;
    keadaan: string;
  };

  @IsObject()
  alatPemadamApi: {
    status: string;
    kuantiti: string;
    keadaan: string;
  };

  @IsObject()
  rakitKeselamatan: {
    status: string;
    kuantiti: string;
    keadaan: string;
  };

  @IsObject()
  radioWireless: {
    status: string;
    kuantiti: string;
    keadaan: string;
  };

  @IsObject()
  image: {
    MTUUrl: string;
    AISUrl: string;
  };
}

export class KelengkapanMenangkapIkanDto {
  @IsBoolean()
  GPS: boolean;

  @IsBoolean()
  echoSounder: boolean;

  @IsBoolean()
  radar: boolean;

  @IsBoolean()
  satNavigation: boolean;

  @IsBoolean()
  sonar: boolean;

  @IsBoolean()
  fishFinder: boolean;

  @IsBoolean()
  radioWireless: boolean;

  @IsBoolean()
  ATUR: boolean;

  @IsBoolean()
  netHouler: boolean;

  @IsBoolean()
  powerBlock: boolean;

  @IsBoolean()
  netDrum: boolean;

  @IsBoolean()
  petakIkan: boolean;

  @IsBoolean()
  RSW: boolean;

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

  @IsBoolean()
  veselBaharu: boolean;
}

export class PerakuanPegawaiDto {
  @IsBoolean()
  diSokong: boolean;

  @IsDateString()
  tarikhPemeriksaan: string;

  @IsObject()
  image: {
    tandaTanganPembantuImg: string;
    tandatanganPegawaiImg: string;
  };
}

export class PerakuanEmpunyaVeselDto {
  @IsString()
  jenisPermohonan: string;

  @IsDateString()
  tarikhPemeriksaan: string;

  @IsObject()
  image: {
    tandaTanganEmpunyaVeselImg: string;
  };
}

export class CreateBorangLPIDto {
  @ApiProperty({ description: 'No Pendaftaran Vesel details' })
  @IsObject()
  noPendaftaranVesel: NoPendaftaranVeselDto;

  @ApiProperty({ description: 'Tanda Penukul Besi details' })
  @IsObject()
  tandaPenukulBesi: TandaPenukulBesiDto;

  @ApiProperty({ description: 'Tin Plate details' })
  @IsObject()
  tinPlate: TinPlateDto;

  @ApiProperty({ description: 'Paku Penanda Lebar' })
  @IsBoolean()
  pakuPenandaLebar: boolean;

  @ApiProperty({ description: 'Rumah Kemudi details' })
  @IsObject()
  rumahKemudi: RumahKemudiDto;

  @ApiProperty({ description: 'Pukat Tunda Berlesen details' })
  @IsObject()
  pukatTundaBerlesen: PukatTundaBerlesenDto;

  @ApiProperty({ description: 'Ukuran Dimensi Vesel details' })
  @IsObject()
  ukuranDimensiVesel: UkuranDimensiVeselDto;

  @ApiProperty({ description: 'Enjin details' })
  @IsObject()
  enjin: EnjinDto;

  @ApiProperty({ description: 'Peralatan Keselamatan details' })
  @IsObject()
  peralatanKeselamatan: PeralatanKeselamatanDto;

  @ApiProperty({ description: 'Kelengkapan Menangkap Ikan details' })
  @IsObject()
  kelengkapanMenangkapIkan: KelengkapanMenangkapIkanDto;

  @ApiProperty({ description: 'Peralatan list', type: [PeralatanDto] })
  @IsArray()
  peralatan: PeralatanDto[];

  @ApiProperty({ description: 'Saiz Mata Pukat Tunda', required: false })
  @IsOptional()
  @IsString()
  saizMataPukatTunda?: string;

  @ApiProperty({ description: 'Jenis Peralatan Semasa' })
  @IsString()
  jenisPeralatanSemasa: string;

  @ApiProperty({ description: 'Keadaan Vesel details' })
  @IsObject()
  keadaanVesel: KeadaanVeselDto;

  @ApiProperty({ description: 'Tarikh Pemeriksaan' })
  @IsDateString()
  tarikhPemeriksaan: string;

  @ApiProperty({ description: 'Perakuan Pegawai details' })
  @IsObject()
  perakuanPegawai: PerakuanPegawaiDto;

  @ApiProperty({ description: 'Perakuan Empunya Vesel details' })
  @IsObject()
  perakuanEmpunyaVesel: PerakuanEmpunyaVeselDto;
}