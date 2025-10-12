import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fishing_log_nds')
export class FishingLogNdEntity {
  @Column({ nullable: false })
  fishing_log_id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
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
