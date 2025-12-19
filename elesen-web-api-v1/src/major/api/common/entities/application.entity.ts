import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('applications')
export class ApplicationEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36 })
  application_type_id: string;

  @Column({ type: 'varchar', length: 255 })
  full_name: string;

  @Column({ type: 'varchar', length: 255 })
  ic_no: string;

  @Column({ type: 'date' })
  date_of_birth: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  type_of_gender_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  bumiputera_status: string;

  @Column({ type: 'varchar', length: 255 })
  age: string;

  @Column({ type: 'char', length: 36, nullable: true })
  type_of_race_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  marital_status_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_of_children: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mail_address1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mail_address2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mail_address3: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  mail_postcode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mail_city: string;

  @Column({ type: 'char', length: 36, nullable: true })
  mail_state_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  home_address1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  home_address2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  home_address3: string;

  @Column({ type: 'varchar', length: 6, nullable: true })
  home_postcode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  home_city: string;

  @Column({ type: 'char', length: 36, nullable: true })
  home_state_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mobile_phone_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'char', length: 36, nullable: true })
  type_of_residence_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  dun_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  parlimen_id: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  application_amount: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  application_loan_period: string;

  @Column({ type: 'char', length: 36, nullable: true })
  bank_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bank_account_no: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}