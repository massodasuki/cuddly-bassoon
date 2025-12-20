import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_declarations')
export class LandingDeclarationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  month: number;

  @Column({ nullable: true })
  week: number;

  @Column({ nullable: true })
  startDay: number;

  @Column({ nullable: true })
  endDay: number;

  @Column({ nullable: true })
  is_verified: number;

  @Column({ nullable: true })
  decision_by: string;

  @Column({ nullable: true })
  decision_at: Date;

  @Column({ nullable: true })
  landing_status_id: string;

  @Column({ nullable: true })
  submitted_at: Date;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  used_in_monthly: number;

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

  @Column({ nullable: true })
  landing_declare_monthly_id: string;

}

