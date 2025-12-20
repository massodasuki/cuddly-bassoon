import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru')
export class KruEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: false })
  nama_kru: string;

  @Column({ nullable: true })
  no_kp_baru: string;

  @Column({ nullable: true })
  no_kp_lama: string;

  @Column({ nullable: true })
  no_kad: string;

  @Column({ nullable: false })
  jawatan: string;

  @Column({ nullable: true })
  tarikh_kemaskini_mykad: Date;

  @Column({ nullable: false })
  status_kru: number;

  @Column({ nullable: true })
  no_sijil: string;

  @Column({ nullable: true })
  no_plks: string;

  @Column({ nullable: true })
  tarikh_tamat_plks: Date;

  @Column({ nullable: true })
  negara: string;

  @Column({ nullable: false })
  warganegara: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

