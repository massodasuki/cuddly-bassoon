import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applications')
export class ApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_type_id: string;

  @Column({ nullable: false })
  full_name: string;

  @Column({ nullable: false })
  ic_no: string;

  @Column({ nullable: false })
  date_of_birth: Date;

  @Column({ nullable: true })
  type_of_gender_id: string;

  @Column({ nullable: true })
  bumiputera_status: string;

  @Column({ nullable: false })
  age: string;

  @Column({ nullable: true })
  type_of_race_id: string;

  @Column({ nullable: true })
  marital_status_id: string;

  @Column({ nullable: true })
  no_of_children: string;

  @Column({ nullable: true })
  mail_address1: string;

  @Column({ nullable: true })
  mail_address2: string;

  @Column({ nullable: true })
  mail_address3: string;

  @Column({ nullable: true })
  mail_postcode: string;

  @Column({ nullable: true })
  mail_city: string;

  @Column({ nullable: true })
  mail_state_id: string;

  @Column({ nullable: true })
  home_address1: string;

  @Column({ nullable: true })
  home_address2: string;

  @Column({ nullable: true })
  home_address3: string;

  @Column({ nullable: true })
  home_postcode: string;

  @Column({ nullable: true })
  home_city: string;

  @Column({ nullable: true })
  home_state_id: string;

  @Column({ nullable: true })
  phone_no: string;

  @Column({ nullable: true })
  mobile_phone_no: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  type_of_residence_id: string;

  @Column({ nullable: true })
  dun_id: string;

  @Column({ nullable: true })
  parlimen_id: string;

  @Column({ nullable: true })
  application_amount: number;

  @Column({ nullable: true })
  application_loan_period: string;

  @Column({ nullable: true })
  bank_id: string;

  @Column({ nullable: true })
  bank_account_no: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
