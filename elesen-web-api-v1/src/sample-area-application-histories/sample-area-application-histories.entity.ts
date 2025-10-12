import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_area_application_histories')
export class SampleAreaApplicationHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  sample_area_application_id: string;

  @Column({ nullable: false })
  status_id: string;

  @Column({ nullable: true })
  review: string;

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
