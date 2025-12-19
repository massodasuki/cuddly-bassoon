import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('approvals')
export class Approval {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  object_type: string;

  @Column({ type: 'char', length: 36, nullable: true })
  object_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  action_by_type: string;

  @Column({ type: 'char', length: 36, nullable: true })
  action_by_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  action: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  section: string;

  @CreateDateColumn()
  created_at: Date;
}