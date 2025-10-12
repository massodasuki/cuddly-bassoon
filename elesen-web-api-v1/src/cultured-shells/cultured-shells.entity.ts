import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cultured_shells')
export class CulturedShellEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vessel_no: string;

  @Column({ nullable: false })
  shell_type: string;

  @Column({ nullable: false })
  item_type: string;

  @Column({ nullable: false })
  kawasan_pendaratan: string;

  @Column({ nullable: true })
  ref_no: string;

  @Column({ nullable: false })
  skl_license_no: string;

  @Column({ nullable: false })
  skl_license_date: Date;

  @Column({ nullable: false })
  skl_expiry_date: Date;

  @Column({ nullable: false })
  license_tol: string;

  @Column({ nullable: false })
  license_file: string;

  @Column({ nullable: true })
  license_confirmation: number;

  @Column({ nullable: true })
  location: any;

  @Column({ nullable: true })
  land_area: number;

  @Column({ nullable: true })
  acknowledgment: number;

  @Column({ nullable: true })
  receipt_no: string;

  @Column({ nullable: true })
  receipt_file: string;

  @Column({ nullable: true })
  pin: string;

  @Column({ nullable: true })
  ssd_grant: string;

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
