import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru_application_krus')
export class KruApplicationKruEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: false })
  ic_number: string;

  @Column({ nullable: true })
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
  selected_for_approval: number;

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
  ssd_number: string;

  @Column({ nullable: true })
  previous_ssd_number: string;

  @Column({ nullable: true })
  has_sucessfully_printed: number;

  @Column({ nullable: true })
  kru_position_id: string;

  @Column({ nullable: true })
  race_id: string;

  @Column({ nullable: true })
  kru_health_id: string;

  @Column({ nullable: true })
  health_declaration: string;

  @Column({ nullable: true })
  bumiputera_status_id: string;

  @Column({ nullable: true })
  kewarganegaraan_status_id: string;

  @Column({ nullable: true })
  parliament_id: string;

  @Column({ nullable: true })
  parliament_seat_id: string;

}

