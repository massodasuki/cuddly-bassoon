import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('fish_species_nds')
export class FishSpeciesNdEntity {
  @PrimaryColumn()
  fish_species_id: string;

  @Column({ nullable: false })
  species_name: string;

  @Column({ nullable: true })
  scientific_name: string;

  @Column({ nullable: true })
  category: string;

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

