import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessel_hulls')
export class DaratVesselHullEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  hull_type: string;

  @Column({ nullable: true })
  drilled: number;

  @Column({ nullable: true })
  brightly_painted: number;

  @Column({ nullable: true })
  vessel_registration_remarks: string;

  @Column({ nullable: true })
  length: number;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  depth: number;

  @Column({ nullable: true })
  overall_image_path: string;

  @Column({ nullable: true })
  right_side_image_path: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  is_approved: number;

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
