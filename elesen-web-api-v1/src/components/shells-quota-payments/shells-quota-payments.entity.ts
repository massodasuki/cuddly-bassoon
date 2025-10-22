import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shells_quota_payments')
export class ShellsQuotaPaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  shells_quota_id: string;

  @Column({ nullable: false })
  receipt_no: string;

  @Column({ nullable: false })
  receipt_file: string;

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
