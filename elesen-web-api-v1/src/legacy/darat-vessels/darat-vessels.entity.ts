import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_vessels')
export class DaratVesselEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  registration_number: string;

  @Column({ nullable: true })
  length: number;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  depth: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  own_vessel: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  transportation: string;

  @Column({ nullable: true })
  is_approved: number;

}

