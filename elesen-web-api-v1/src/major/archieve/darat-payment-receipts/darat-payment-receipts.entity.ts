import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_payment_receipts')
export class DaratPaymentReceiptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  receipt_number: string;

  @Column({ nullable: true })
  payment_date: Date;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  uploaded_file_path: string;

  @Column({ nullable: false })
  is_active: number;

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
