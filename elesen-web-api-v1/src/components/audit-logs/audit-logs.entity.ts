import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  table_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  action: string;

  @Column({ type: 'json', nullable: true })
  details: any;

  @Column({ type: 'text', nullable: true })
  exception: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ip_address: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  browser: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  browser_family: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  browser_version: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  browser_engine: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  platform: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  platform_family: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  platform_version: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  device_type: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  device_family: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  device_model: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  mobile_grade: string;

  @Column({ type: 'tinyint' })
  is_bot: number;

  @Column({ type: 'tinyint' })
  is_in_app: number;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
