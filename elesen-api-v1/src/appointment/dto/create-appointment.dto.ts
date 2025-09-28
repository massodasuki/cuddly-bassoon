import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { StatusJanjiTemu, StatusLaporan, StatusKehadiran, Dihadiri } from '../entities/appointment.entity';
import { Type } from 'class-transformer';

export class CreateAppointmentDto {
  @IsDate()
  @Type(() => Date)
  tarikhPemeriksaan: Date;

  @IsOptional()
  @IsEnum(StatusJanjiTemu)
  status?: StatusJanjiTemu;

  @IsOptional()
  @IsEnum(StatusLaporan)
  penyediaanLaporan?: StatusLaporan;

  @IsOptional()
  @IsEnum(StatusKehadiran)
  kehadiran?: StatusKehadiran;

  @IsOptional()
  @IsEnum(Dihadiri)
  dihadiri?: Dihadiri;

  @IsOptional()
  vesselId?: string;
}
