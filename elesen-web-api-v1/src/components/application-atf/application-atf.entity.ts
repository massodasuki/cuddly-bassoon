import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('application_atf')
export class ApplicationAtfEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: true })
  atf_number: string;

  @Column({ nullable: true })
  atf_type: string;

  @Column({ nullable: true })
  issue_date: Date;

  @Column({ nullable: true })
  expiry_date: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  issuing_authority: string;

  @Column({ nullable: true })
  remarks: string;

  @Column({ nullable: true })
  is_deleted: number;

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