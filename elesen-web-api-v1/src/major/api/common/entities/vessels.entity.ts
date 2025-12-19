import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vessels')
export class VesselEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  zon: string;

  @Column({ nullable: true })
  grt: number;

  @Column({ nullable: true })
  peralatan_utama: string;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: true })
  negeri: string;

  @Column({ nullable: true })
  daerah: string;

  @Column({ nullable: true })
  pangkalan: string;

  @Column({ nullable: true })
  bil_enjin: number;

  @Column({ nullable: true })
  kategori_vessel: string;

  @Column({ nullable: true })
  license_start: Date;

  @Column({ nullable: true })
  license_end: Date;

  @Column({ nullable: true })
  entity_id: string;

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
  is_active: number;

  @Column({ nullable: true })
  pangkalan_utama_id: number;

  @Column({ nullable: true })
  pangkalan_tambahan_id: number;

  @Column({ nullable: false })
  vessel_no: string;

  @Column({ nullable: true })
  zone: string;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

}
