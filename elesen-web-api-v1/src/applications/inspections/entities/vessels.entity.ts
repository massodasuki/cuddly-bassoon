import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../../components/users/user.entity';

export enum FisheryType {
  LAND = 'land',
  MARINE = 'marine'
}

export enum AddLandingBaseCategory {
  DOMESTIC = 'domestic',
  FOREIGN = 'foreign'
}

@Entity('vessels')
export class Vessels {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  state_id: string;

  @Column({
    type: 'enum',
    enum: FisheryType,
    nullable: true
  })
  fishery_type: FisheryType;

  @Column({ type: 'varchar', length: 255, nullable: true })
  registration_no: string;

  @Column({ type: 'tinyint', nullable: true })
  in_country: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zon: string;

  @Column({ type: 'double', precision: 8, scale: 2, nullable: true })
  grt: number;

  @Column({ type: 'char', length: 36, nullable: true })
  peralatan_utama: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pendaftaran: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  negeri: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  daerah: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pangkalan: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  bil_enjin: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  kategori_vessel: string;

  @Column({ type: 'date', nullable: true })
  license_start: Date;

  @Column({ type: 'date', nullable: true })
  license_end: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  pangkalan_utama_id: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  pangkalan_tambahan_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  vessel_no: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  vesel_origin_country: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  vessel_body_type: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  length: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  width: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  depth: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vesel_origin_base: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  jenama_enjin: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  model_enjin: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  kuasa_kuda_enjin: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  nombor_enjin: string;

  @Column({ type: 'int', nullable: true })
  bilangan_petak_ikan: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zone: string;

  @Column({ type: 'varchar', length: 225, nullable: true })
  main_landing_base_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  addtional_landing_base_id: string;

  @Column({ type: 'datetime', nullable: true })
  start_date: Date;

  @Column({ type: 'datetime', nullable: true })
  end_date: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  approval_no: string;

  @Column({ type: 'date', nullable: true })
  main_landing_base_start_date: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  temp_landing_base_id: string;

  @Column({ type: 'date', nullable: true })
  temp_landing_base_start_date: Date;

  @Column({ type: 'date', nullable: true })
  temp_landing_base_end_date: Date;

  @Column({
    type: 'enum',
    enum: AddLandingBaseCategory,
    nullable: true
  })
  add_landing_base_category: AddLandingBaseCategory;

  @Column({ type: 'char', length: 36, nullable: true })
  add_landing_base_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  add_landing_base_country_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  add_landing_base_name: string;

  @Column({ type: 'date', nullable: true })
  add_landing_base_start_date: Date;

  @Column({ type: 'date', nullable: true })
  add_landing_base_end_date: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  company_id: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  createdByUser: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updatedByUser: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'deleted_by' })
  deletedByUser: User;
}