import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sample_areas')
export class SampleAreaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: false })
  land_area: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  hub_id: string;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  issued_date: Date;

  @Column({ nullable: true })
  reference: string;

  @Column({ nullable: false })
  status_id: string;

  @Column({ nullable: true })
  supporting_doc: string;

  @Column({ nullable: true })
  signature_name: string;

  @Column({ nullable: true })
  signature_title: string;

  @Column({ nullable: true })
  signature_reference: string;

  @Column({ nullable: true })
  signature_path: string;

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

