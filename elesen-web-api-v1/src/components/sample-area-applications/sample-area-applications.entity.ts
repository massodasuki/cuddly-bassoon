import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_area_applications')
export class SampleAreaApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  sample_area_id: string;

  @Column({ nullable: false })
  vessel_no: string;

  @Column({ nullable: false })
  shell_type: string;

  @Column({ nullable: false })
  sample_area_items_id: string;

  @Column({ nullable: false })
  sample_area_location_id: string;

  @Column({ nullable: false })
  sample_area_hub_id: string;

  @Column({ nullable: true })
  aknowledge: string;

  @Column({ nullable: true })
  ref_no: string;

  @Column({ nullable: true })
  receipt_payment: string;

  @Column({ nullable: true })
  receipt_file: string;

  @Column({ nullable: true })
  ssd_kpn: string;

  @Column({ nullable: true })
  pin: string;

  @Column({ nullable: false })
  status_id: string;

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
