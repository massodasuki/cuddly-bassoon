import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_safety_equipments')
export class LpiSafetyEquipmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  full_inspection_lpi_id: string;

  @Column({ nullable: true })
  jacket_status: number;

  @Column({ nullable: true })
  jacket_quantity: number;

  @Column({ nullable: true })
  jacket_condition: number;

  @Column({ nullable: true })
  bouya_status: number;

  @Column({ nullable: true })
  bouya_quantity: number;

  @Column({ nullable: true })
  bouya_condition: number;

  @Column({ nullable: true })
  fire_extinguisher_status: number;

  @Column({ nullable: true })
  fire_extinguisher_quantity: number;

  @Column({ nullable: true })
  fire_extinguisher_condition: number;

  @Column({ nullable: true })
  wireless_radio_status: number;

  @Column({ nullable: true })
  wireless_radio_quantity: number;

  @Column({ nullable: true })
  wireless_radio_condition: number;

  @Column({ nullable: true })
  safety_raft: number;

  @Column({ nullable: true })
  safety_raft_quantity: number;

  @Column({ nullable: true })
  safety_raft_condition: number;

  @Column({ nullable: true })
  jacket_picture_path: string;

  @Column({ nullable: true })
  raft_picture_path: string;

  @Column({ nullable: true })
  fire_extinguisher_picture_path: string;

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

  @Column({ nullable: true })
  lpi_inspection_id: string;
}