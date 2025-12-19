import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('application_esh_nd')
export class ApplicationEshNd {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36 })
  user_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bank_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bank_account_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  bank_branch: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  income_fishing: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  income_other: number;

  @Column({ type: 'int', default: 0 })
  children_count: number;

  @Column({ type: 'int', default: 0 })
  other_dependents: number;

  @Column({ type: 'enum', enum: ['none', 'primary', 'secondary', 'tertiary'], default: 'none' })
  education_level: 'none' | 'primary' | 'secondary' | 'tertiary';

  @Column({ type: 'tinyint', default: 0 })
  agreement: number;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}