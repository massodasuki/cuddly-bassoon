import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessel_engines')
export class DaratVesselEngineEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  horsepower: number;

  @Column({ nullable: true })
  engine_number: string;

  @Column({ nullable: true })
  engine_image_path: string;

  @Column({ nullable: true })
  engine_number_image_path: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  is_approved: number;

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
  user_id: string;

}
