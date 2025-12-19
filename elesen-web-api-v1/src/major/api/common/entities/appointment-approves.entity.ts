import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointment_approves')
export class AppointmentApprove {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  file_title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  file_path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  file_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  watikah_cert: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cert_no: string;

  @Column({ type: 'date' })
  approval_date: Date;

  @Column({ type: 'varchar', length: 255 })
  approval_status: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  approval_notes: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}