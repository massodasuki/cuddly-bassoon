import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shells_quota_histories')
export class ShellsQuotaHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  shells_quota_id: string;

  @Column({ nullable: false })
  status_id: string;

  @Column({ nullable: true })
  review: string;

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

