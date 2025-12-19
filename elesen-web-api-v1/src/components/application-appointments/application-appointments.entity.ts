import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('application_appointments')
export class ApplicationAppointmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: false })
  appointment_date: Date;

  @Column({ nullable: true })
  appointment_time: string;

  @Column({ nullable: true })
  appointment_type: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  officer_id: string;

  @Column({ nullable: true })
  location: string;

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