import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_inspection_equipments')
export class DaratInspectionEquipmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  inspection_id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  condition: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: false })
  is_approved: number;

  @Column({ nullable: false })
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
