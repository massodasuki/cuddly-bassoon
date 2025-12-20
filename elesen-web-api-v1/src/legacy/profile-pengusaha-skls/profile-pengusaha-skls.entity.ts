import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_pengusaha_skls')
export class ProfilePengusahaSklEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  profile_id: string;

  @Column({ nullable: true })
  no_lesen_skl: string;

  @Column({ nullable: true })
  jenis_sistem_kultur_laut: string;

  @Column({ nullable: true })
  jenis_ternakan: string;

  @Column({ nullable: true })
  tarikh_tamat_lesen: Date;

  @Column({ nullable: true })
  keluasan: number;

  @Column({ nullable: true })
  salinan_lesen_skl: string;

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

}

