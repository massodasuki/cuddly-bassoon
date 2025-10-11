import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProfilVesel } from './profil-vesel.entity';

@Entity('peralatan')
export class Peralatan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @Column({ name: 'jenis_peralatan' })
  jenisPeralatan: string;

  @Column({ name: 'panjang_meter', type: 'decimal' })
  panjangMeter: number;

  @Column({ name: 'tarikh_dilesen', type: 'date' })
  tarikhDilesen: string;

  @Column()
  status: string;

  @ManyToOne(() => ProfilVesel, profilVesel => profilVesel.peralatan)
  profilVesel: ProfilVesel;
}