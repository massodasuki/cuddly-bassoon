import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_applications')
export class DaratApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  application_type_id: string;

  @Column({ nullable: true })
  application_status_id: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  inspection_date: Date;

  @Column({ nullable: true })
  no_rujukan: string;

  @Column({ nullable: false })
  is_appeal: number;

  @Column({ nullable: false })
  is_approved: number;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  new_entity_id: string;

}
