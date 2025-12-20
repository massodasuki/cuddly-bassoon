import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_pentadbir_skls')
export class ProfilePentadbirSklEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  pemilik_vesel: string;

  @Column({ nullable: true })
  status_pengguna: string;

  @Column({ nullable: true })
  hubungan: string;

  @Column({ nullable: true })
  no_vesel: string;

  @Column({ nullable: true })
  surat_pelantikan_pentadbir: string;

  @Column({ nullable: true })
  dokumen_sokongan_1: string;

  @Column({ nullable: true })
  dokumen_sokongan_2: string;

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

