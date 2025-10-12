import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_payment_payees')
export class SubsistencePaymentPayeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  subsistence_payment_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  decision_district: string;

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

  @Column({ nullable: false })
  has_landing: number;

  @Column({ nullable: true })
  landing_monthly_id: string;

  @Column({ nullable: false })
  in_process: number;

  @Column({ nullable: false })
  have_paid: number;

  @Column({ nullable: true })
  pay_status: string;

}
