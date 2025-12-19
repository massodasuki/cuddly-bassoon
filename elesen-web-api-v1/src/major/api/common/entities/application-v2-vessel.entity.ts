import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('application_v2_vessel')
export class ApplicationV2Vessel {
  @PrimaryColumn({ type: 'char', length: 36 })
  application_id: string;

  @PrimaryColumn({ type: 'char', length: 36 })
  vessel_id: string;
}