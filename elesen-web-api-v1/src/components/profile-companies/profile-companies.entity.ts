import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_companies')
export class ProfileCompanieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_name: string;

  @Column({ nullable: true })
  company_reg_no: string;

  @Column({ nullable: true })
  company_reg_date: Date;

  @Column({ nullable: true })
  lhdn_account_no: string;

  @Column({ nullable: false })
  current_address1: string;

  @Column({ nullable: true })
  current_address2: string;

  @Column({ nullable: true })
  current_address3: string;

  @Column({ nullable: false })
  current_postcode: string;

  @Column({ nullable: false })
  current_district: string;

  @Column({ nullable: false })
  current_state_id: string;

  @Column({ nullable: false })
  letter_address1: string;

  @Column({ nullable: true })
  letter_address2: string;

  @Column({ nullable: true })
  letter_address3: string;

  @Column({ nullable: false })
  letter_postcode: string;

  @Column({ nullable: false })
  letter_district: string;

  @Column({ nullable: false })
  letter_state_id: string;

  @Column({ nullable: false })
  phone_no: string;

  @Column({ nullable: true })
  fax_no: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  comp_sec: string;

  @Column({ nullable: true })
  ownership: string;

  @Column({ nullable: true })
  bumiputera_status: number;

  @Column({ nullable: true })
  company_status: string;

  @Column({ nullable: true })
  modal_allow: number;

  @Column({ nullable: true })
  modal_paid: number;

  @Column({ nullable: false })
  company_business: string;

  @Column({ nullable: true })
  company_exp_fish: string;

  @Column({ nullable: true })
  company_exp_other: string;

  @Column({ nullable: false })
  user_id: string;

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
