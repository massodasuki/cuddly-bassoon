import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_pentadbir_harta_vessel')
export class ProfilePentadbirHartaVesselEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  profile_pentadbir_harta_id: string;

  @Column({ nullable: false })
  vessel_id: string;

}

