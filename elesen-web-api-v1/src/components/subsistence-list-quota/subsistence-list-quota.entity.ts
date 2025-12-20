import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_list_quota')
export class SubsistenceListQuotaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  generated_date: Date;

  @Column({ nullable: false })
  total_applicants: number;

  @Column({ nullable: false })
  quota: number;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true })
  entities_id: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  phase: string;

  @Column({ nullable: true })
  subsistence_list_quota_hq_id: string;

}

