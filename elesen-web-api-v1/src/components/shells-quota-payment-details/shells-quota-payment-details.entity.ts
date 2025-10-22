import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shells_quota_payment_details')
export class ShellsQuotaPaymentDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  shells_quota_payment_id: string;

  @Column({ nullable: false })
  shell_quota_item_id: string;

  @Column({ nullable: false })
  payment_amount: number;

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
