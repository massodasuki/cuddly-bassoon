import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../../components/users/user.entity';
import { Applications } from './applications.entity';

export enum InspectionStatus {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected'
}

@Entity('inspections')
export class Inspections {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  vessel_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  application_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  type_code_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  type: string;

  @Column({ type: 'date', nullable: true })
  inspection_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  inspector: string;

  @Column({ type: 'int', nullable: true })
  full_inspection_lpi_id: number;

  @Column({
    type: 'enum',
    enum: InspectionStatus,
    default: InspectionStatus.ONGOING
  })
  inspection_status: InspectionStatus;

  @Column({ type: 'datetime', nullable: true })
  accepted_at: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @ManyToOne(() => Applications, { nullable: true })
  @JoinColumn({ name: 'application_id' })
  application: Applications;
}