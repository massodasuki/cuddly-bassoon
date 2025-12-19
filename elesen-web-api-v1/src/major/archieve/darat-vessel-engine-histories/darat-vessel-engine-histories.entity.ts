import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessel_engine_histories')
export class DaratVesselEngineHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  vessel_engine_id: string;

  @Column({ nullable: true })
  engine_model: string;

  @Column({ nullable: true })
  engine_brand: string;

  @Column({ nullable: true })
  engine_number: string;

  @Column({ nullable: true })
  engine_image_path: string;

  @Column({ nullable: true })
  engine_number_image_path: string;

  @Column({ nullable: true })
  horsepower: number;

  @Column({ nullable: true })
  is_active: number;

  @Column({ nullable: true })
  is_approved: number;

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
