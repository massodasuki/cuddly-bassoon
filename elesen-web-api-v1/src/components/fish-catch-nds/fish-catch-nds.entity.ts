import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('fish_catch_nds')
export class FishCatchNdEntity {
  @PrimaryColumn()
  fish_catch_id: string;

  @Column({ nullable: false })
  catching_location_id: string;

  @Column({ nullable: false })
  fish_species_id: string;

  @Column({ nullable: false })
  weight_kg: number;

  @Column({ nullable: true })
  length_cm: number;

  @Column({ nullable: false })
  quantity: number;

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

