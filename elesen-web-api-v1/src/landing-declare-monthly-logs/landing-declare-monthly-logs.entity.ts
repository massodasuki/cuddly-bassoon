import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_declare_monthly_logs')
export class LandingDeclareMonthlyLogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  landing_declare_monthly_id: string;

  @Column({ nullable: true })
  landing_status_id: string;

  @Column({ nullable: true })
  completed: number;

  @Column({ nullable: true })
  supported: number;

  @Column({ nullable: true })
  approved: number;

  @Column({ nullable: false })
  is_editing: number;

  @Column({ nullable: true })
  remark: string;

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
