import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('peralatan_tambahan_tambahan')
export class PeralatanTambahanTambahan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @ManyToOne(() => VesselInspection, vi => vi.peralatanTambahanTambahan)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}
