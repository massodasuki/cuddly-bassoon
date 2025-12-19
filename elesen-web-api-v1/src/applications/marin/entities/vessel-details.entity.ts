import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vessel_details')
export class VesselDetailsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pendaftaran: string;

  // Nested structure will be handled in service with joins
}