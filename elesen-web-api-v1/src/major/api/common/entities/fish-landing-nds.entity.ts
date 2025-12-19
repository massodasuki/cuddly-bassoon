import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('fish_landing_nds')
export class FishLandingNdEntity {
  @PrimaryColumn()
  fish_landing_id: string;

  @Column({ nullable: false })
  fishing_log_id: string;

  @Column({ nullable: false })
  fish_species_id: string;

  @Column({ nullable: false })
  total_weight_kg: number;

  @Column({ nullable: false })
  landing_date: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

}
