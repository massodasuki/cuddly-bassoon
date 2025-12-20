import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru01_applications')
export class Kru01ApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: false })
  application_type: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: false })
  ic_number: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  kru_position_id: string;

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
  kru_health_id: string;

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

