import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cm_equipment')
export class CmEquipment {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  vessel_id: string;

  @Column({ type: 'varchar', length: 255 })
  equipment_name: string;

  @Column({ type: 'int' })
  equipment_type: number;

  @Column({ type: 'date', nullable: true })
  date_licensed: Date;

  @Column({ type: 'int' })
  fisherman_type: number;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  amount: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  notes: string;

  @Column({ type: 'tinyint', width: 1 })
  is_active: boolean;

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