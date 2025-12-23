import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_fishing_gears')
export class LpiFishingGearsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  lpi_inspection_id: string;

  @Column({ nullable: true })
  has_echo_sounder: number;

  @Column({ nullable: true })
  has_sonar: number;

  @Column({ nullable: true })
  has_net_hauler: number;

  @Column({ nullable: true })
  has_power_block: number;

  @Column({ nullable: true })
  fish_compartment_quantity: number;

  @Column({ nullable: true })
  has_rsw: number;

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