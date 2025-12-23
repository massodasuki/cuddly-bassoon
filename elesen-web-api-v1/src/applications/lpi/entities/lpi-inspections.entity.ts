import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_inspections')
export class LpiInspectionsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  inspection_id: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  fishery_type: string;

  @Column({ nullable: true })
  owner_health: string;

  @Column({ nullable: true })
  vessel_condition: string;

  @Column({ nullable: true })
  vessel_originality: string;

  @Column({ nullable: true })
  hull_type: string;

  @Column({ nullable: true })
  vessel_type: string;

  @Column({ nullable: true })
  inspection_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  attandane_form: string;

  @Column({ nullable: true })
  vessel_picture: string;

  @Column({ nullable: true })
  owner_inspector_picture: string;

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