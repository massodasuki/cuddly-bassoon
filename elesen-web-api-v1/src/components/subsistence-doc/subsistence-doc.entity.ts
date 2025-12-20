import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_doc')
export class SubsistenceDocEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  subsistence_application_id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  file_path: string;

  @Column({ nullable: false })
  file_detail: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  verified_by: string;

  @Column({ nullable: true })
  verified_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

}

