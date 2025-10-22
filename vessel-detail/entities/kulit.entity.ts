import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('kulit')
export class Kulit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'tarikh_dilesen', type: 'date' })
  tarikhDilesen: string;

  @Column({ name: 'panjang_meter', type: 'decimal' })
  panjangMeter: number;

  @Column({ name: 'lebar_meter', type: 'decimal' })
  lebarMeter: number;

  @Column({ name: 'kedalaman_meter', type: 'decimal' })
  kedalamanMeter: number;

  @Column({ name: 'muatan_grt', type: 'decimal' })
  muatanGRT: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  tindakan: string | null;
}