import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_application_logs')
export class DaratApplicationLogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: true })
  application_status_id: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  review_flag: number;

  @Column({ nullable: true })
  support_flag: number;

  @Column({ nullable: true })
  decision_flag: number;

  @Column({ nullable: true })
  confirmation_flag: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

