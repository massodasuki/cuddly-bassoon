import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('butiran_vessels')
export class ButiranVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 5, scale: 2 })
  panjang: number;

  @Column('decimal', { precision: 5, scale: 2 })
  lebar: number;

  @Column('decimal', { precision: 5, scale: 2 })
  dalam: number;

  @Column('decimal', { precision: 6, scale: 2, name: 'muatan_grt' })
  muatanGrt: number;

  @OneToOne(() => VesselInspection, vi => vi.butiranVesel)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}
