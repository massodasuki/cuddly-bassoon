import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pengkalan_pendaratan')
export class PengkalanPendaratan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nama_sungai', nullable: true })
  namaSungai: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  kawasan: string;

  @Column({ name: 'no_lesen_peralatan', nullable: true })
  noLesenPeralatan: string;

  @Column({ name: 'tempoh_sah_lesen', nullable: true })
  tempohSahLesen: string;

  @Column({ name: 'peralatan_utama', nullable: true })
  peralatanUtama: string;

  @Column({ name: 'peralatan_tambahan', nullable: true })
  peralatanTambahan: string;
}