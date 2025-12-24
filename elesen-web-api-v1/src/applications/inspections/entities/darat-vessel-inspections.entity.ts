import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../../components/users/user.entity';
import { Applications } from './applications.entity';
import { DaratVesselEntity as DaratVessels } from '../../darat/entities/darat-vessels.entity';

@Entity('darat_vessel_inspections')
export class DaratVesselInspections {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  vessel_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  application_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'date', nullable: true })
  inspection_date: Date;

  @Column({ type: 'date', nullable: true })
  valid_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inspection_location: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inspected_by: string;

  @Column({ type: 'tinyint', default: 0 })
  is_support: number;

  @Column({ type: 'text', nullable: true })
  inspection_summary: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_registration_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_condition: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_origin: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  hull_type: string;

  @Column({ type: 'tinyint', nullable: true })
  drilled: number;

  @Column({ type: 'tinyint', nullable: true })
  brightly_painted: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_registration_remarks: string;

  @Column({ type: 'double', precision: 8, scale: 2, nullable: true })
  length: number;

  @Column({ type: 'double', precision: 8, scale: 2, nullable: true })
  width: number;

  @Column({ type: 'double', precision: 8, scale: 2, nullable: true })
  depth: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  engine_model: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  engine_brand: string;

  @Column({ type: 'int', nullable: true })
  horsepower: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  engine_number: string;

  @Column({ type: 'tinyint', nullable: true })
  safety_jacket_status: number;

  @Column({ type: 'int', nullable: true })
  safety_jacket_quantity: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  safety_jacket_condition: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  attendance_form_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inspector_owner_image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  overall_image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  safety_jacket_image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  engine_image_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  engine_number_image_path: string;

  @Column({ type: 'tinyint', default: 0 })
  is_approved: number;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'tinyint', default: 0 })
  vessel_roof: number;

  @Column({ type: 'tinyint', default: 0 })
  width_marker_nail: number;

  @Column({ type: 'tinyint', default: 0 })
  is_no_pev: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pev: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitude: number;

  @ManyToOne(() => Applications, { nullable: true })
  @JoinColumn({ name: 'application_id' })
  application: Applications;

  @ManyToOne(() => DaratVessels, { nullable: true })
  @JoinColumn({ name: 'vessel_id' })
  vessel: DaratVessels;

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