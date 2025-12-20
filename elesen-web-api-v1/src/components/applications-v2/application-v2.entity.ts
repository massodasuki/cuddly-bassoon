import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('applications_v2')
export class ApplicationV2 {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ref: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}
