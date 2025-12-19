import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ppv04b_check_document_one')
export class Ppv04bCheckDocumentOneEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: true })
  status: string;

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