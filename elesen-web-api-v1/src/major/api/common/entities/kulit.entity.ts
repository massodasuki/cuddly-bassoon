import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('kulit')
export class KulitEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: true })
  panjang: string;

  @Column({ nullable: true })
  lebar: string;

  @Column({ nullable: true })
  dalam: string;

  @Column({ nullable: true })
  jenis_kulit: string;

  @Column({ nullable: true })
  tarikh_kulit_dilesenkan: string;

  @Column({ nullable: true })
  status_kulit: string;

  @Column({ nullable: true })
  catatan: string;

  @Column({ nullable: false })
  baru: number;

  @Column({ nullable: false })
  asal: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
