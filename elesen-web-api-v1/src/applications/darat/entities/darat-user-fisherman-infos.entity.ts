import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_user_fisherman_infos')
export class DaratUserFishermanInfosEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  year_become_fisherman: number;

  @Column({ nullable: true })
  becoming_fisherman_duration: number;

  @Column({ nullable: true })
  working_days_fishing_per_month: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  estimated_income_yearly_fishing: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  estimated_income_other_job: number;

  @Column({ nullable: true })
  days_working_other_job_per_month: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  receive_pension: boolean;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  receive_financial_aid: boolean;

  @Column({ nullable: true })
  financial_aid_agency: string;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  epf_contributor: boolean;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ type: 'tinyint', width: 1, nullable: false, default: true })
  is_active: boolean;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  fisherman_type_id: string;

  @Column({ nullable: true })
  transportation: string;

  @Column({ nullable: true })
  receive_approval: string;
}