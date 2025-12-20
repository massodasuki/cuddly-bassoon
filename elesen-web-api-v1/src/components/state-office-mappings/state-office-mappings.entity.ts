import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('state_office_mappings')
export class StateOfficeMappingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  parent_id: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  office_id: string;

  @Column({ nullable: true })
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

}

