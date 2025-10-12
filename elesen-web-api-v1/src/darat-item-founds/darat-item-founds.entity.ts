import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_item_founds')
export class DaratItemFoundEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  inspection_id: string;

  @Column({ nullable: false })
  item: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: true })
  remarks: string;

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

  @Column({ nullable: true })
  application_id: string;

}
