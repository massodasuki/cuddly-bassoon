import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('application_pins')
export class ApplicationPinEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: false })
  pin_code: string;

  @Column({ nullable: true })
  pin_type: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  is_active: number;

  @Column({ nullable: true })
  is_deleted: number;

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