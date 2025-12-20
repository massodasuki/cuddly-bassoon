import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales_record_nds')
export class SalesRecordNdEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  sales_record_id: string;

  @Column({ nullable: false })
  fish_landing_id: string;

  @Column({ nullable: false })
  fish_species_id: string;

  @Column({ nullable: false })
  sold_weight_kg: number;

  @Column({ nullable: false })
  price_per_kg: number;

  @Column({ nullable: false })
  total_sale_amount: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

}

