import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('complaints')
export class ComplaintEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  complaint_no: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phone_no: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: true })
  file_title: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: true })
  file_name: string;

  @Column({ nullable: true })
  assign_to: string;

  @Column({ nullable: false })
  complaint_type: string;

  @Column({ nullable: false })
  complaint_status: number;

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
  close_date: Date;

}

