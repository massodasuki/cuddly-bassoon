import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_documents')
export class LandingDocumentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  landing_declaration_id: string;

  @Column({ nullable: false })
  file_name: string;

  @Column({ nullable: false })
  file_path: string;

  @Column({ nullable: true })
  description: string;

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

