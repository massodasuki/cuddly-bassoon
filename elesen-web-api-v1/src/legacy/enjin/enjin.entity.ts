import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('enjin')
export class EnjinEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: false })
  jenis_enjin: number;

  @Column({ nullable: false })
  jenama: string;

  @Column({ nullable: false })
  kuasa_kuda: number;

  @Column({ nullable: false })
  no_enjin: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  tarikh_enjin_dilesenkan: Date;

  @Column({ nullable: false })
  kategori_enjin: string;

  @Column({ nullable: false })
  status_enjin: string;

  @Column({ nullable: false })
  has_turbo: number;

  @Column({ nullable: false })
  bahan_api: string;

  @Column({ nullable: true })
  gambar_enjin: string;

  @Column({ nullable: true })
  gambar_no_enjin: string;

  @Column({ nullable: true })
  gambar_pev: string;

  @Column({ nullable: true })
  gambar_turbo: string;

  @Column({ nullable: true })
  gambar_generator: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

