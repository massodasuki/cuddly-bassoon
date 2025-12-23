import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_inland_fishing_equipments')
export class LpiInlandFishingEquipmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  full_inspection_lpi_id: string;

  @Column({ nullable: false })
  main_equipment_cm_id: string;

  @Column({ nullable: true })
  extra_equipment_1_cm_id: string;

  @Column({ nullable: true })
  extra_equipment_2_cm_id: string;

  @Column({ nullable: true })
  extra_equipment_3_cm_id: string;

  @Column({ nullable: true })
  extra_equipment_4_cm_id: string;

  @Column({ nullable: true })
  extra_equipment_5_cm_id: string;

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