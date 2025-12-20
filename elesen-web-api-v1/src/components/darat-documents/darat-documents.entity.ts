import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_documents')
export class DaratDocumentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: true })
  application_type: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  is_approved: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

