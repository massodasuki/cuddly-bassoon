import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('kesalahan')
export class Kesalahan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @Column({ name: 'no_kad_pengenalan' })
  noKadPengenalan: string;

  @Column()
  akta: string;

  @Column()
  seksyen: string;

  @Column()
  kesalahan: string;

  @Column({ type: 'date' })
  tarikh: string;

  @Column()
  keputusan: string;
}