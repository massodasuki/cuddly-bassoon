import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessel_histories')
export class DaratVesselHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vessel_id: string;

  @Column({ nullable: true })
  vessel_condition: string;

  @Column({ nullable: true })
  vessel_registration_number: string;

  @Column({ nullable: true })
  transportation: string;

  @Column({ nullable: true })
  is_approved: number;

  @Column({ nullable: true })
  is_active: number;

  @Column({ nullable: true })
  safety_jacket_status: number;

  @Column({ nullable: true })
  safety_jacket_quantity: number;

  @Column({ nullable: true })
  safety_jacket_condition: string;

  @Column({ nullable: true })
  safety_jacket_image_path: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
