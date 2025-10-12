import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru_application_foreign_krus')
export class KruApplicationForeignKruEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  passport_number: string;

  @Column({ nullable: true })
  passport_end_date: Date;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ nullable: true })
  gender_id: string;

  @Column({ nullable: true })
  source_country_id: string;

  @Column({ nullable: true })
  foreign_kru_position_id: string;

  @Column({ nullable: true })
  crew_whereabout: string;

  @Column({ nullable: true })
  has_plks: number;

  @Column({ nullable: true })
  plks_end_date: Date;

  @Column({ nullable: true })
  selected_for_approval: number;

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
  plks_number: string;

  @Column({ nullable: true })
  supported: number;

  @Column({ nullable: true })
  approved: number;

  @Column({ nullable: true })
  revocation_reason: string;

}
