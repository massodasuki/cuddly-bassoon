import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('profile_user_vessel')
export class ProfileUserVesselEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  profile_user_id: string;

  @Column({ nullable: false })
  vessel_id: string;

  @Column({ nullable: false })
  role: string;

  @Column({ nullable: false })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}