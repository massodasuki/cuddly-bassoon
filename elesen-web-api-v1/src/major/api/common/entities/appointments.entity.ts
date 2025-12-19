import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
export class Appointment {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  icno: string;

  @Column({ type: 'varchar', length: 255 })
  level: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  role: string;

  @Column({ type: 'varchar', length: 255 })
  office_duty: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  department: string;

  @Column({ type: 'date' })
  report_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  district: string;

  @Column({ type: 'varchar', length: 255 })
  ic_file_path: string;

  @Column({ type: 'varchar', length: 255 })
  ic_file_name: string;

  @Column({ type: 'varchar', length: 255 })
  letter_file_path: string;

  @Column({ type: 'varchar', length: 255 })
  letter_file_name: string;

  @Column({ type: 'date' })
  inactive_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inactive_note: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inactive_file_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inactive_file_name: string;

  @Column({ type: 'int' })
  status_id: number;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}