import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('catching_location_nds')
export class CatchingLocationNdEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  catching_location_id: string;

  @Column({ type: 'char', length: 36 })
  fishing_log_id: string;

  @Column({ type: 'varchar', length: 255 })
  state_name: string;

  @Column({ type: 'varchar', length: 255 })
  district_name: string;

  @Column({ type: 'varchar', length: 255 })
  river_name: string;

  @Column({ type: 'varchar', length: 255 })
  location_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitude: number;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @Column({ type: 'tinyint', width: 1, default: 1 })
  is_active: boolean;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}