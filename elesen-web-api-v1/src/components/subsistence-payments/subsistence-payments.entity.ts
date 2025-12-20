import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_payments')
export class SubsistencePaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  subsistence_payment_states_id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  month: number;

  @Column({ nullable: false })
  generated_date: Date;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true })
  entity_id: string;

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

