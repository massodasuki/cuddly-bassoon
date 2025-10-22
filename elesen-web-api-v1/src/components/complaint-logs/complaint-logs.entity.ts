import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('complaint_logs')
export class ComplaintLogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  complaint_id: string;

  @Column({ nullable: true })
  remark: string;

  @Column({ nullable: true })
  text_assign_to: string;

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
  status: number;

}
