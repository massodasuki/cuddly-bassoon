import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permohonans')
export class PermohonanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  saiz: string;

  @Column({ nullable: false })
  kuantiti: string;

  @Column({ nullable: false })
  daerah: string;

  @Column({ nullable: false })
  negeri: string;

  @Column({ nullable: true })
  wilayah: string;

  @Column({ nullable: false })
  tarikh: Date;

  @Column({ nullable: false })
  status_semakan: string;

  @Column({ nullable: true })
  tarikh_disemak: Date;

  @Column({ nullable: true })
  ulasan: string;

  @Column({ nullable: true })
  keputusan: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  tarikh_diputuskan: Date;

  @Column({ nullable: true })
  ulasan_keputusan: string;

  @Column({ nullable: true })
  jumlah_kuota: number;

  @Column({ nullable: true })
  jumlah_baki_kerang: number;

}
