import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_infos')
export class LandingInfoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  landing_declaration_id: string;

  @Column({ nullable: true })
  landing_date: Date;

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

