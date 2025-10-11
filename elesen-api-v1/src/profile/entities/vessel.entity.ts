import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vessels_profile')
export class Vessel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'no_pendaftaran' })
  noPendaftaran: string;

  @Column({ name: 'jenis_kulit' })
  jenisKulit: string;

  @Column({ name: 'panjang_meter', type: 'decimal', precision: 5, scale: 2 })
  panjangMeter: number;

  @Column({ name: 'jenama_enjin' })
  jenamaEnjin: string;

  @Column({ name: 'kuasa_kuda', type: 'int' })
  kuasaKuda: number;
}