import { IsBoolean, IsString, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class WakilDto {
  @IsString()
  nama: string;

  @IsString()
  noKadPengenalan: string;

  @IsString()
  suratWakilImg: string;
}

export class KehadiranDto {
  @IsBoolean()
  hadir: boolean;

  @IsBoolean()
  pemilik: boolean;

  @IsObject()
  wakil: WakilDto;
}

export class CreateAppointmentDto {
  @ApiProperty({ description: 'Appointment details' })
  @IsObject()
  appointment: {
    kehadiran: KehadiranDto;
  };
}