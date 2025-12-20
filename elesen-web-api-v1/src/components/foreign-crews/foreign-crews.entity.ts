import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('foreign_crews')
export class ForeignCrewEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  passport_number: string;

  @Column({ nullable: true })
  passport_end_date: Date;

  @Column({ nullable: true })
  plks_end_date: Date;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: false })
  birth_date: Date;

  @Column({ nullable: false })
  gender_id: string;

  @Column({ nullable: true })
  source_country_id: string;

  @Column({ nullable: true })
  foreign_kru_position_id: string;

  @Column({ nullable: true })
  crew_whereabout: string;

  @Column({ nullable: true })
  kru_application_foreign_kru_id: string;

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

}

