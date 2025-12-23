import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lpi_inspection_items')
export class LpiInspectionItemsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  inspection_id: string;

  @Column({ nullable: true })
  kumpulan_peralatan: string;

  @Column({ nullable: false })
  nama_peralatan: string;

  @Column({ nullable: false, default: 1 })
  kuantiti: number;

  @Column({ nullable: true })
  catatan: string;

  @Column({ nullable: false, default: 0 })
  display_order: number;

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