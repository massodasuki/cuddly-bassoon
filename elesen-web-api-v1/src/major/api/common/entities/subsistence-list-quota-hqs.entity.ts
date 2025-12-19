import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_list_quota_hqs')
export class SubsistenceListQuotaHqEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  phase: string;

  @Column({ nullable: false })
  generated_date: Date;

  @Column({ nullable: false })
  status: string;

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
