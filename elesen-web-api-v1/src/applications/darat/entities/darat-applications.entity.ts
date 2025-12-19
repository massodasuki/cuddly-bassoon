import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { DaratVesselInspectionEntity } from './darat-vessel-inspections.entity';
import { CodeMaster } from '../../common/code-masters/code-masters.entity';
import { DaratVesselEntity } from './darat-vessels.entity';

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

  @ManyToOne(() => CodeMaster, { nullable: true })
  @JoinColumn({ name: 'application_status_id' })
  status: CodeMaster;

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

  @OneToOne(() => DaratVesselInspectionEntity, daratVesselInspection => daratVesselInspection.daratApplication, { cascade: true })
  daratVesselInspection: DaratVesselInspectionEntity;

  @ManyToOne(() => DaratVesselEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  daratVessel: DaratVesselEntity;
}
