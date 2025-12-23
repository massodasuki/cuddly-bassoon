import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../../components/users/user.entity';

export enum ApplicationStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  APPEAL = 'appeal'
}

export enum SubmitterRole {
  PEMILIK = 'PEMILIK',
  PENGURUS = 'PENGURUS'
}

@Entity('applications')
export class Applications {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  vessel_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  procurement_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  application_status_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  application_type_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

  @Column({
    type: 'enum',
    enum: ApplicationStatus,
    default: ApplicationStatus.DRAFT
  })
  status: ApplicationStatus;

  @Column({ type: 'varchar', length: 255, nullable: true })
  reference_no: string;

  @Column({ type: 'tinyint', nullable: true })
  is_active: number;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  submitted_by: string;

  @Column({
    type: 'enum',
    enum: SubmitterRole,
    nullable: true
  })
  submitter_role: SubmitterRole;

  @Column({ type: 'datetime', nullable: true })
  submitted_at: Date;

  @Column({ type: 'tinyint', nullable: true })
  is_approved: number;

  @Column({ type: 'char', length: 36, nullable: true })
  decision_by: string;

  @Column({ type: 'datetime', nullable: true })
  decision_at: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pin_number: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'submitted_by' })
  submittedByUser: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'decision_by' })
  decisionByUser: User;
}