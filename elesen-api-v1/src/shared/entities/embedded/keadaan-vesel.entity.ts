import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('keadaan_vessels')
export class KeadaanVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  struktur: string;

  @Column()
  jenis: string;

  @Column({ name: 'jenis_kulit' })
  jenisKulit: string;

  @Column({ name: 'tarikh_pemeriksaan', type: 'date' })
  tarikhPemeriksaan: string;

  @OneToOne(() => VesselInspection, vi => vi.infoVessel)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}
