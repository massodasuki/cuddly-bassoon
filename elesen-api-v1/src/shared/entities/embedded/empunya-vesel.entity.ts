import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { VesselInspection } from '../vessel-inspection.entity';

@Entity('empunya_vessels')
export class EmpunyaVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @Column()
  ic: string;

  @OneToOne(() => VesselInspection, vi => vi.empunyaVesel)
  @JoinColumn({ name: 'pemeriksaan_vessels_id' })
  vesselInspection: VesselInspection;
}

