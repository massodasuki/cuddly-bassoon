import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_vessels')
export class LpiVesselsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  width_marker_nail: number;

  @Column({ nullable: true })
  width_marker_nail_comment: string;

  @Column({ nullable: true })
  pilot_house_paint_true: number;

  @Column({ nullable: true })
  pilot_house_paint_bright: number;

  @Column({ nullable: true })
  pilot_house_has_zone_code: number;

  @Column({ nullable: true })
  pilot_house_alphabet: string;

  @Column({ nullable: true })
  pilot_house_on_roof: number;

  @Column({ nullable: true })
  pilot_house_comment: string;

  @Column({ nullable: true })
  iron_hammer_marker: number;

  @Column({ nullable: true })
  iron_hammer_alphabet: string;

  @Column({ nullable: true })
  iron_hammer_comment: string;

  @Column({ nullable: true })
  registration_number_is_punch: number;

  @Column({ nullable: true })
  registration_number_is_paint: number;

  @Column({ nullable: true })
  registration_number_comment: string;

  @Column({ nullable: true })
  tinplate: number;

  @Column({ nullable: true })
  tinplate_no: string;

  @Column({ nullable: true })
  tinplate_path: string;

  @Column({ nullable: true })
  has_qr_code: number;

  @Column({ nullable: true })
  qr_code_is_working: number;

  @Column({ nullable: true })
  qr_picture_path: string;

  @Column({ nullable: true })
  qr_picture_comment: string;

  @Column({ nullable: true })
  has_white_stripes: number;

  @Column({ nullable: true })
  white_stripes_is_bright: number;

  @Column({ nullable: true })
  net_drum_quantity: number;

  @Column({ nullable: true })
  pukat_tunda_comment: string;

  @Column({ nullable: true })
  length_udv: number;

  @Column({ nullable: true })
  width_udv: number;

  @Column({ nullable: true })
  depth_udv: number;

  @Column({ nullable: true })
  grt_total: number;

  @Column({ nullable: true })
  gt_amount: number;

  @Column({ nullable: true })
  ugv_a: number;

  @Column({ nullable: true })
  ugv_b: number;

  @Column({ nullable: true })
  ugv_c: number;

  @Column({ nullable: true })
  ugv_d: number;

  @Column({ nullable: true })
  ugv_e: number;

  @Column({ nullable: true })
  ugv_f: number;

  @Column({ nullable: true })
  vessel_picture_left_path: string;

  @Column({ nullable: true })
  vessel_picture_right_path: string;

  @Column({ nullable: true })
  vessel_picture_front_path: string;

  @Column({ nullable: true })
  vessel_picture_back_path: string;

  @Column({ nullable: true })
  vessel_picture_overall_path: string;

  @Column({ nullable: true })
  full_inspection_lpi_id: number;

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
  ugv_g: number;
}