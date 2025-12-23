import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_equipment_items')
export class LpiEquipmentItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  lpi_inspection_id: string;

  @Column({ nullable: true })
  group_id: string;

  @Column({ nullable: true })
  equipment_id: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  note: string;

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