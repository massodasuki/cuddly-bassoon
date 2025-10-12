import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_application_approveds')
export class DaratApplicationApprovedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: false })
  certificate_number: string;

  @Column({ nullable: true })
  approved_by: string;

  @Column({ nullable: true })
  approved_at: Date;

  @Column({ nullable: false })
  valid_duration_months: number;

  @Column({ nullable: true })
  expired_at: Date;

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
