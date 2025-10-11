import { IsBoolean, IsString, IsObject } from 'class-validator';
import { Transform } from 'class-transformer';
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
  @ApiProperty({ description: 'Appointment details as JSON string' })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return JSON.parse(value);
    }
    return value;
  })
  @IsObject()
  appointment: {
    kehadiran: KehadiranDto;
  };
}