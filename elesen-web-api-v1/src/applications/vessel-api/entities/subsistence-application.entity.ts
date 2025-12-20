import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_application')
export class SubsistenceApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  registration_no: string;

  @Column({ nullable: false })
  type_registration: string;

  @Column({ nullable: false })
  fullname: string;

  @Column({ nullable: false })
  icno: string;

  @Column({ nullable: true })
  bank_id: string;

  @Column({ nullable: true })
  state_bank_id: string;

  @Column({ nullable: false })
  no_account: string;

  @Column({ nullable: true })
  tot_incomefish: number;

  @Column({ nullable: true })
  tot_incomeother: number;

  @Column({ nullable: true })
  tot_allincome: number;

  @Column({ nullable: true })
  tot_child: number;

  @Column({ nullable: true })
  tot_otherchild: number;

  @Column({ nullable: true })
  tot_allchild: number;

  @Column({ nullable: true })
  is_primary: number;

  @Column({ nullable: true })
  is_secondary: number;

  @Column({ nullable: true })
  is_uni: number;

  @Column({ nullable: true })
  is_notschool: number;

  @Column({ nullable: true })
  declaration: number;

  @Column({ nullable: false })
  sub_application_status: string;

  @Column({ nullable: true })
  status_checked: string;

  @Column({ nullable: true })
  checked_by: string;

  @Column({ nullable: true })
  checked_remarks: string;

  @Column({ nullable: true })
  status_supported: string;

  @Column({ nullable: true })
  supported_by: string;

  @Column({ nullable: true })
  supported_remarks: string;

  @Column({ nullable: true })
  batch_id: string;

  @Column({ nullable: false })
  status_quota: string;

  @Column({ nullable: false })
  status_hq: string;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  is_approved_jkk: number;

  @Column({ nullable: true })
  application_approved_date: Date;

  @Column({ nullable: true })
  application_expired_date: Date;

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
  user_id: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  contact_number: string;

  @Column({ nullable: true })
  fisherman_type_id: string;

  @Column({ nullable: true })
  working_days_fishing_per_month: number;

  @Column({ nullable: true })
  submitted_at: Date;

  @Column({ nullable: true })
  year_become_fisherman: number;

  @Column({ nullable: true })
  becoming_fisherman_duration: number;

}

