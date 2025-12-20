import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_fault_records')
export class DaratFaultRecordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  fault_type: string;

  @Column({ nullable: true })
  fault_date: Date;

  @Column({ nullable: true })
  method_section: string;

  @Column({ nullable: true })
  decision: string;

  @Column({ nullable: true })
  method: string;

  @Column({ nullable: true })
  case_number: string;

  @Column({ nullable: true })
  document_path: string;

  @Column({ nullable: false })
  is_active: number;

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

