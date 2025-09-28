import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('peralatan_menangkap')
export class PeralatanMenangkap {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gps: boolean;

  @Column({ name: 'echo_sounder' })
  echoSounder: boolean;

  @Column()
  radar: boolean;

  @Column()
  atur: boolean;

  @Column({ name: 'net_hauler' })
  netHauler: boolean;

  @OneToOne(() => VesselInspection, vi => vi.peralatanMenangkap)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}
