import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_sailing_equipments')
export class LpiSailingEquipmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  full_inspection_lpi_id: string;

  @Column({ nullable: false })
  shipping_lights_status: number;

  @Column({ nullable: true })
  shipping_lights_quantity: number;

  @Column({ nullable: true })
  shipping_lights_condition: number;

  @Column({ nullable: true })
  mtu_status: number;

  @Column({ nullable: true })
  mtu_quantity: number;

  @Column({ nullable: true })
  mtu_condition: number;

  @Column({ nullable: true })
  ais_status: number;

  @Column({ nullable: true })
  ais_quantity: number;

  @Column({ nullable: true })
  ais_condition: number;

  @Column({ nullable: true })
  gps_status: number;

  @Column({ nullable: true })
  gps_quantity: number;

  @Column({ nullable: true })
  gps_condition: number;

  @Column({ nullable: true })
  mtu_ais_picture_path: string;

  @Column({ nullable: true })
  shipping_lights_picture_path: string;

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