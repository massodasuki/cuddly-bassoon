import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru_applications')
export class KruApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_type_id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  reference_number: string;

  @Column({ nullable: true })
  kru_application_status_id: string;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  submitted_at: Date;

  @Column({ nullable: true })
  registration_start: Date;

  @Column({ nullable: true })
  registration_end: Date;

  @Column({ nullable: true })
  pin_number: string;

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
  vessel_id: string;

  @Column({ nullable: true })
  decision_by: string;

  @Column({ nullable: true })
  decision_at: Date;

  @Column({ nullable: true })
  application_type: string;

  @Column({ nullable: true })
  start_counting_at: Date;

  @Column({ nullable: true })
  is_approved: number;

  @Column({ nullable: true })
  submitted_by: string;

}

