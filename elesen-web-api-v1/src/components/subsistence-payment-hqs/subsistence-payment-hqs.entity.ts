import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_payment_hqs')
export class SubsistencePaymentHqEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  month: number;

  @Column({ nullable: false })
  generated_date: Date;

  @Column({ nullable: true })
  status: string;

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

