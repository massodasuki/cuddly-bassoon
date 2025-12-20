import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lesen')
export class LesenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: false })
  no_lesen: string;

  @Column({ nullable: false })
  tarikh_keluar: Date;

  @Column({ nullable: false })
  tarikh_tamat: Date;

  @Column({ nullable: false })
  kod_zon: string;

  @Column({ nullable: false })
  kawasan_perairan: string;

  @Column({ nullable: false })
  no_patil: string;

  @Column({ nullable: true })
  catatan: string;

  @Column({ nullable: false })
  status_lesen: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

