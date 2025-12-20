import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_info_activities')
export class LandingInfoActivitieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  landing_info_id: string;

  @Column({ nullable: false })
  landing_activity_type_id: string;

  @Column({ nullable: true })
  equipment: string;

  @Column({ nullable: true })
  time: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  location_name: string;

  @Column({ nullable: true })
  landing_water_type_id: string;

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

