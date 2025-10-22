import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Vessel } from '../vessels/vessel.entity';

@Entity('profile_pentadbir_hartas')
export class ProfilePentadbirHartaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  icno: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  vessel_owner_id: string;

  @Column({ nullable: true })
  pemilik_vesel: string;

  @Column({ nullable: true })
  status_pengguna: string;

  @Column({ nullable: true })
  hubungan: string;

  @Column({ nullable: true })
  no_vesel: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  surat_pelantikan_pentadbir: string;

  @Column({ nullable: true })
  dokumen_sokongan_1: string;

  @Column({ nullable: true })
  dokumen_sokongan_2: string;

  @Column({ nullable: true })
  dokumen_sokongan_3: string;

  @Column({ nullable: true })
  dokumen_sokongan_4: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
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

  @Column({ nullable: false })
  verification_modal_shown: number;

 @OneToOne(() => Vessel, v => v.pentadbirHartas)
 @JoinColumn({ name: 'vessel_id' })
 vessel: Vessel;

}
