import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nelayan_marins')
export class NelayanMarinEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  ic_number: string;

  @Column({ nullable: false })
  name: string;

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
  home_contact_number: string;

  @Column({ nullable: true })
  mobile_contact_number: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  registration_start: Date;

  @Column({ nullable: true })
  registration_end: Date;

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
  kru_application_kru_id: string;

  @Column({ nullable: true })
  kru_position_id: string;

  @Column({ nullable: true })
  race_id: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  bumiputera_status_id: string;

  @Column({ nullable: true })
  kewarganegaraan_status_id: string;

  @Column({ nullable: true })
  parliament_id: string;

  @Column({ nullable: true })
  parliament_seat_id: string;

}

