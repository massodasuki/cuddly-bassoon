import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru_application_foreigns')
export class KruApplicationForeignEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: true })
  approval_type: string;

  @Column({ nullable: true })
  plks_end_date: Date;

  @Column({ nullable: true })
  permission_application_id: string;

  @Column({ nullable: true })
  supervised: string;

  @Column({ nullable: true })
  crew_placement: string;

  @Column({ nullable: true })
  immigration_office_id: string;

  @Column({ nullable: true })
  immigration_date: Date;

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
  immigration_gates_id: string;

  @Column({ nullable: true })
  immigration_gate_id: string;

}
