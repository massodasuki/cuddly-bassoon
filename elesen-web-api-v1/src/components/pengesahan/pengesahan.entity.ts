import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pengesahan')
export class PengesahanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  permohonan_id: string;

  @Column({ nullable: false })
  no_pin: string;

  @Column({ nullable: false })
  no_rujukan: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  status_pengesahan_benih: string;

  @Column({ nullable: true })
  tarikh_disemak: Date;

  @Column({ nullable: true })
  status_pengesahan_kebun: string;

  @Column({ nullable: true })
  tarikh_pengesahan_kebun: Date;

  @Column({ nullable: true })
  tarikh_pergerakan_dari: Date;

  @Column({ nullable: true })
  tarikh_pergerakan_hingga: Date;

  @Column({ nullable: true })
  jenis_kenderaan: string;

  @Column({ nullable: true })
  no_pendaftaran_kenderaan: string;

}
