import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('landing_activity_species')
export class LandingActivitySpecieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  landing_info_activity_id: string;

  @Column({ nullable: false })
  species_id: string;

  @Column({ nullable: false })
  weight: number;

  @Column({ nullable: false })
  price_per_weight: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
