import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';
import { DaratVesselEntity } from './darat-vessels.entity';

@Entity('darat_vessel_inspections')
export class DaratVesselInspectionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  inspection_date: Date;

  @Column({ nullable: true })
  valid_date: Date;

  @Column({ nullable: true })
  inspection_location: string;

  @Column({ nullable: true })
  inspected_by: string;

  @Column({ nullable: false })
  is_support: number;

  @Column({ nullable: true })
  inspection_summary: string;

  @Column({ nullable: true })
  vessel_registration_number: string;

  @Column({ nullable: true })
  vessel_condition: string;

  @Column({ nullable: true })
  vessel_origin: string;

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
  engine_model: string;

  @Column({ nullable: true })
  engine_brand: string;

  @Column({ nullable: true })
  horsepower: number;

  @Column({ nullable: true })
  engine_number: string;

  @Column({ nullable: true })
  safety_jacket_status: number;

  @Column({ nullable: true })
  safety_jacket_quantity: number;

  @Column({ nullable: true })
  safety_jacket_condition: string;

  @Column({ nullable: true })
  attendance_form_path: string;

  @Column({ nullable: true })
  vessel_image_path: string;

  @Column({ nullable: true })
  inspector_owner_image_path: string;

  @Column({ nullable: true })
  overall_image_path: string;

  @Column({ nullable: true })
  safety_jacket_image_path: string;

  @Column({ nullable: true })
  engine_image_path: string;

  @Column({ nullable: true })
  engine_number_image_path: string;

  @Column({ nullable: false })
  is_approved: number;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  //FK
  @OneToOne(() => DaratApplicationEntity, da => da.daratVesselInspection)
  @JoinColumn({ name: 'application_id' })
  daratApplication: DaratApplicationEntity;
  
  @ManyToOne(() => DaratVesselEntity, { nullable: true })
  @JoinColumn({ name: 'vessel_id' })
  daratVessel: DaratVesselEntity;

}

