import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kpv03_vessel_license_application_shareholders')
export class Kpv03VesselLicenseApplicationShareholdersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  is_deleted: number;

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