import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_user_vessel')
export class ProfileUserVesselEntity {
  @Column({ nullable: false })
  profile_user_id: string;

  @Column({ nullable: false })
  vessel_id: string;

  @Column({ nullable: false })
  role: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
