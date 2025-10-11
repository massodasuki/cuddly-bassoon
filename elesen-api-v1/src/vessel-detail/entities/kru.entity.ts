import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProfilVesel } from './profil-vesel.entity';

@Entity('kru')
export class Kru {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'no_kad_pendaftaran' })
  noKadPendaftaran: string;

  @Column()
  nama: string;

  @Column()
  negara: string;

  @Column({ name: 'no_kad_pengenalan' })
  noKadPengenalan: string;

  @Column()
  jawatan: string;

  @ManyToOne(() => ProfilVesel, profilVesel => profilVesel.kru)
  profilVesel: ProfilVesel;
}