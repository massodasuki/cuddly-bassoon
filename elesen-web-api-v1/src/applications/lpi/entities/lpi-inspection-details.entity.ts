import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_inspection_details')
export class LpiInspectionDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  full_inspection_lpi_id: string;

  @Column({ nullable: true })
  keadaan_vesel: string;

  @Column({ nullable: true })
  ketulinan_vesel: string;

  @Column({ nullable: true })
  jenis_kulit: string;

  @Column({ nullable: true })
  jenis_vesel: string;

  @Column({ nullable: true })
  tarikh_pemeriksaan: Date;

  @Column({ nullable: true })
  lokasi: string;

  @Column({ nullable: true })
  borang_kehadiran: string;

  @Column({ nullable: true })
  gambar_vesel_semak: string;

  @Column({ nullable: true })
  gambar_pemeriksa_pemilik: string;

  @Column({ nullable: false })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;
}