import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('lpi_engines')
export class LpiEnginesEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column({ nullable: true })
  full_inspection_lpi_id: string;

  @Column({ nullable: true })
  engine_number: number;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  turbo: number;

  @Column({ nullable: true })
  serial_no: string;

  @Column({ nullable: true })
  power_hp: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  power_kw: number;

  @Column({ nullable: true })
  cylinders: number;

  @Column({ nullable: true })
  stroke: string;

  @Column({ nullable: true })
  displacement: string;

  @Column({ nullable: true })
  fuel_type_code_id: string;

  @Column({ nullable: true })
  condition_code_id: string;

  @Column({ nullable: true, default: 0 })
  is_main_engine: number;

  @Column({ nullable: true, default: 1 })
  is_functional: number;

  @Column({ nullable: true, default: 1 })
  is_compliant: number;

  @Column({ nullable: true })
  engine_overall_picture_path: string;

  @Column({ nullable: true })
  engine_plate_picture_path: string;

  @Column('text', { nullable: true })
  remarks: string;

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

  @Column({ nullable: true })
  lpi_inspection_id: string;

  @Column({ nullable: true })
  engine_brand: string;

  @Column({ nullable: true })
  engine_model: string;

  @Column({ nullable: true })
  engine_has_turbo: number;

  @Column({ nullable: true })
  turbo_hp: number;

  @Column({ nullable: true })
  engine_no: string;

  @Column({ nullable: true })
  has_pev: number;

  @Column({ nullable: true })
  pev_no: string;

  @Column({ nullable: true })
  engine_picture_path: string;

  @Column({ nullable: true })
  engine_no_picture_path: string;

  @Column({ nullable: true })
  pev_no_picture_path: string;

  @Column({ nullable: true })
  turbo_picture_path: string;

  @Column({ nullable: true })
  generator_picture_path: string;

  @Column({ nullable: true })
  engine_brand_additional: string;

  @Column({ nullable: true })
  engine_model_additional: string;

  @Column({ nullable: true })
  engine_has_turbo_additional: number;

  @Column({ nullable: true })
  turbo_hp_additional: number;

  @Column({ nullable: true })
  engine_no_additional: string;

  @Column({ nullable: true })
  has_pev_additional: number;

  @Column({ nullable: true })
  pev_no_additional: string;

  @Column({ nullable: true })
  engine_picture_path_additional: string;

  @Column({ nullable: true })
  engine_no_picture_path_additional: string;

  @Column({ nullable: true })
  pev_no_picture_path_additional: string;

  @Column({ nullable: true })
  turbo_picture_path_additional: string;

  @Column({ nullable: true })
  has_generator: number;

  @Column({ nullable: true })
  generator_brand: string;

  @Column({ nullable: true })
  generator_model: string;

  @Column({ nullable: true })
  generator_has_turbo: number;

  @Column({ nullable: true })
  generator_wattage: number;

  @Column({ nullable: true })
  generator_no: string;

  @Column({ nullable: true })
  generator_has_pev: number;

  @Column({ nullable: true })
  generator_pev_no: string;

  @Column({ nullable: true })
  generator_brand_additional: string;

  @Column({ nullable: true })
  generator_model_additional: string;

  @Column({ nullable: true })
  generator_has_turbo_additional: number;

  @Column({ nullable: true })
  generator_wattage_additional: number;

  @Column({ nullable: true })
  generator_no_additional: string;

  @Column({ nullable: true })
  generator_has_pev_additional: number;

  @Column({ nullable: true })
  generator_pev_no_additional: string;

  @Column({ nullable: true })
  generator_picture_path_additional: string;
}