import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru_application_logs')
export class KruApplicationLogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: true })
  kru_application_status_id: string;

  @Column({ nullable: true })
  completed: number;

  @Column({ nullable: true })
  checked: number;

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
