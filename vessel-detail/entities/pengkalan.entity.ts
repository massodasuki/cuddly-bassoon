import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProfilVesel } from './profil-vesel.entity';

@Entity('pengkalan')
export class Pengkalan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'no_rujukan_pengkalan' })
  noRujukanPengkalan: string;

  @Column({ name: 'nama_pengkalan' })
  namaPengkalan: string;

  @Column({ name: 'jenis_pengkalan' })
  jenisPengkalan: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column({ name: 'tahun_mula', type: 'date' })
  tahunMula: string;

  @Column()
  status: string;

  @ManyToOne(() => ProfilVesel, profilVesel => profilVesel.pengkalan)
  profilVesel: ProfilVesel;
}