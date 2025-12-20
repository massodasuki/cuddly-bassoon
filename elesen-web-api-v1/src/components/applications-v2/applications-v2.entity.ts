import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applications_v2')
export class ApplicationsV2Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  ref: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  deleted_at: Date;

}

