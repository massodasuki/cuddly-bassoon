import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('lpi_inspections')
export class LpiInspection {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  inspection_id: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'enum', enum: ['land', 'marine'], nullable: true })
  fishery_type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  owner_health: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_condition: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_originality: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  hull_type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_type: string;

  @Column({ type: 'date', nullable: true })
  inspection_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  attandane_form: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vessel_picture: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  owner_inspector_picture: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}