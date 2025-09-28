import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('alat_keselamatan')
export class AlatKeselamatan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @Column()
  ada: boolean;

  @Column()
  keadaan: string;

  @ManyToOne(() => VesselInspection, vi => vi.alatKeselamatan)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}
