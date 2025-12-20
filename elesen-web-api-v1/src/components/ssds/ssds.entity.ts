import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ssds')
export class SsdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  ssd_number: string;

  @Column({ nullable: true })
  application_table_name: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: false })
  has_used: number;

  @Column({ nullable: false })
  is_faulty: number;

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

