import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_help_agency_fishermans')
export class DaratHelpAgencyFishermanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  fisherman_info_id: string;

  @Column({ nullable: true })
  agency_name: string;

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

