import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('borang_permohonan')
export class BorangPermohonan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  noVesel: string;

  @Column({ type: 'date' })
  tarikhPemeriksaan: Date;

  @Column()
  zonOperasi: string;

  @Column()
  penyediaanLaporan: string;
}