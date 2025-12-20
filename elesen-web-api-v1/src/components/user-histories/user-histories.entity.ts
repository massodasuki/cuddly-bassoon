import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_histories')
export class UserHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: false })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  role_name: string;

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

