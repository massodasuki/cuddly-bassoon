import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_audit_log_status')
export class SubsistenceAuditLogStatuEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  subsistence_application_id: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  remark: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

}
