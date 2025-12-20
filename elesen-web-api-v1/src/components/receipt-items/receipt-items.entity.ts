import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('receipt_items')
export class ReceiptItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  receipt_id: string;

  @Column({ nullable: false })
  payment_item_id: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false })
  fee: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

