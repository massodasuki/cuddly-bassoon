import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('receipts')
export class ReceiptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  payment_id: string;

  @Column({ nullable: true })
  receipt_number: string;

  @Column({ nullable: false })
  file_name: string;

  @Column({ nullable: false })
  file_path: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

}
