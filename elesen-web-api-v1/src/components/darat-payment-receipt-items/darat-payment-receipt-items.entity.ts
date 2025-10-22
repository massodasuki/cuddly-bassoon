import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_payment_receipt_items')
export class DaratPaymentReceiptItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  receipt_id: string;

  @Column({ nullable: false })
  item_name: string;

  @Column({ nullable: false })
  price: number;

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
