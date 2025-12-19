import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessel_disposals')
export class DaratVesselDisposalEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  jenis_jualan: string;

  @Column({ nullable: true })
  owner_name: string;

  @Column({ nullable: true })
  owner_phone: string;

  @Column({ nullable: true })
  owner_address: string;

  @Column({ nullable: true })
  owner_ic: string;

  @Column({ nullable: true })
  resit_file_path: string;

  @Column({ nullable: true })
  document_description: string;

  @Column({ nullable: true })
  disposal_time: Date;

  @Column({ nullable: true })
  disposal_location: string;

  @Column({ nullable: true })
  disposal_method: string;

  @Column({ nullable: true })
  before_disposal_image: string;

  @Column({ nullable: true })
  after_disposal_image: string;

  @Column({ nullable: true })
  attendance_form_image: string;

  @Column({ nullable: true })
  is_approved: number;

  @Column({ nullable: true })
  is_active: number;

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
