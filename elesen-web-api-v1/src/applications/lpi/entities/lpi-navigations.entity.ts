import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_navigations')
export class LpiNavigationsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  lpi_inspection_id: string;

  @Column({ nullable: true })
  shipping_lights_status: number;

  @Column({ nullable: true })
  shipping_lights_quantity: number;

  @Column({ nullable: true })
  shipping_lights_condition: number;

  @Column({ nullable: true })
  shipping_lights_picture_path: string;

  @Column({ nullable: true })
  ems_status: number;

  @Column({ nullable: true })
  ems_quantity: number;

  @Column({ nullable: true })
  ems_condition: number;

  @Column({ nullable: true })
  ems_picture_path: string;

  @Column({ nullable: true })
  mtu_status: number;

  @Column({ nullable: true })
  mtu_serial_no: string;

  @Column({ nullable: true })
  mtu_active: number;

  @Column({ nullable: true })
  mtu_picture_path: string;

  @Column({ nullable: true })
  ais_status: number;

  @Column({ nullable: true })
  ais_serial_no: string;

  @Column({ nullable: true })
  ais_active: number;

  @Column({ nullable: true })
  ais_picture_path: string;

  @Column({ nullable: true })
  gps_status: number;

  @Column({ nullable: true })
  gps_serial_no: string;

  @Column({ nullable: true })
  gps_condition: number;

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