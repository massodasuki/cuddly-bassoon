import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_area_application_details')
export class SampleAreaApplicationDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  sample_area_application_id: string;

  @Column({ nullable: false })
  item_id: string;

  @Column({ nullable: false })
  payment_amount: number;

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

