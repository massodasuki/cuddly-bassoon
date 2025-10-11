import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ukuran_dimensi_vesel')
export class UkuranDimensiVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  panjangMeterDalamLesen: number;

  @Column()
  panjangMeterSemasaDiperiksa: number;

  @Column()
  lebarMeterDalamLesen: number;

  @Column()
  lebarMeterSemasaDiperiksa: number;

  @Column()
  kedalamanMeterDalamLesen: number;

  @Column()
  kedalamanMeterSemasaDiperiksa: number;

  @Column()
  muatanGRTDalamLesen: number;

  @Column()
  muatanGRTSemasaDiperiksa: number;

  @Column()
  imageKiri: string;

  @Column()
  imageKanan: string;

  @Column()
  imageHadapan: string;

  @Column()
  imageBelakang: string;

  @Column()
  imageKeseluruhan: string;
}