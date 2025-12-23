import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_inland_fishing_equipment_items')
export class LpiInlandFishingEquipmentItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  full_inspection_lpi_id: string;

  @Column({ nullable: false })
  equipment_id: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  condition: number;

  @Column({ nullable: true })
  position: number;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: false })
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