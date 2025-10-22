import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_users')
export class ProfileUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  icno: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ nullable: true })
  poskod: number;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  parliament: string;

  @Column({ nullable: true })
  parliament_seat: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: false })
  user_type: string;

  @Column({ nullable: false })
  no_phone: string;

  @Column({ nullable: true })
  no_phone_office: string;

  @Column({ nullable: true })
  religion: string;

  @Column({ nullable: true })
  race: string;

  @Column({ nullable: true })
  wedding_status: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  salinan_ic: string;

  @Column({ nullable: true })
  no_vesel: string;

  @Column({ nullable: true })
  document: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  oku_status: number;

  @Column({ nullable: true })
  bumiputera_status: number;

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
  verified_at: Date;

  @Column({ nullable: true })
  verify_status: number;

  @Column({ nullable: false })
  verification_modal_shown: number;

  @Column({ nullable: true })
  ulasan: string;

  @Column({ nullable: true })
  type_id: string;

  @Column({ nullable: true })
  ref: string;

  @Column({ nullable: true })
  phone_code: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  phone_office_code: string;

  @Column({ nullable: true })
  phone_office: string;

  @Column({ nullable: true })
  gender_id: string;

  @Column({ nullable: true })
  religion_id: string;

  @Column({ nullable: true })
  race_id: string;

  @Column({ nullable: true })
  marital_status_id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  is_bumiputera: number;

  @Column({ nullable: false })
  is_active_ajim: number;

  @Column({ nullable: true })
  secondary_phone_number: string;

  @Column({ nullable: true })
  secondary_address_1: string;

  @Column({ nullable: true })
  secondary_address_2: string;

  @Column({ nullable: true })
  secondary_address_3: string;

  @Column({ nullable: true })
  secondary_postcode: string;

  @Column({ nullable: true })
  secondary_district: string;

  @Column({ nullable: true })
  secondary_state: string;

}
