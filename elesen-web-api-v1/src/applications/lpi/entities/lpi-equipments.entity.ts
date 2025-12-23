import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_equipments')
export class LpiEquipmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  lpi_inspection_id: string;

  @Column({ nullable: true })
  main_equipment_id: string;

  @Column({ nullable: true })
  additional_equipment_id: string;

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