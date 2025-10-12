import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pemilikan')
export class PemilikanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: false })
  nama_pemilik: string;

  @Column({ nullable: true })
  no_ic_atau_syarikat: string;

  @Column({ nullable: false })
  jenis_pemilikan: string;

  @Column({ nullable: false })
  negeri: string;

  @Column({ nullable: false })
  daerah: string;

  @Column({ nullable: false })
  tarikh_aktif_pemilikan: Date;

  @Column({ nullable: false })
  status_pemilikan: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
