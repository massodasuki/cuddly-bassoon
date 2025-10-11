import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('aktiviti_penangkapan_ikan')
export class AktivitiPenangkapanIkan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'pekerjaan_lain', nullable: true })
  pekerjaanLain: string;

  @Column({ type: 'int', nullable: true })
  tempoh: number;

  @Column({ name: 'tahun_mula', type: 'int', nullable: true })
  tahunMula: number;
}