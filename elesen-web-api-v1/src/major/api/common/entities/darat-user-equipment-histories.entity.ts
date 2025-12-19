import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_user_equipment_histories')
export class DaratUserEquipmentHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  equipment_id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  is_active: number;

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
