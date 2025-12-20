import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kru04_applications')
export class Kru04ApplicationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  kru_application_id: string;

  @Column({ nullable: true })
  vessel_id: string;

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

