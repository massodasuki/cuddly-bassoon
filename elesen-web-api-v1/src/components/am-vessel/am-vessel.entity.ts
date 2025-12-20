import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('am_vessel')
export class AmVessel {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pendaftaran: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_tetap: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_patil_kekal: string;

  @Column({ type: 'date' })
  tarikh_daftar: Date;

  @Column({ type: 'varchar', length: 255 })
  indikator_kapal: string;

  @Column({ type: 'varchar', length: 255 })
  bahan_api: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status_usaha_kapal: string;

  @Column({ type: 'varchar', length: 255 })
  tempasal_kapal: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  negara: string;

  @Column({ type: 'tinyint' })
  kebenaran_memancing: number;

  @Column({ type: 'tinyint' })
  pemasangan_vtu: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  kod_rfid: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  kod_qr: string;

  @Column({ type: 'varchar', length: 255 })
  hak_milik: string;

  @Column({ type: 'tinyint' })
  status_iuu: number;

  @Column({ type: 'varchar', length: 255 })
  pangkalan_utama: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pangkalan_tambahan: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}
