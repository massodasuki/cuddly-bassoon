import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('application_v2_profile_user')
export class ApplicationV2ProfileUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  profile_user_id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true })
  is_active: number;
}