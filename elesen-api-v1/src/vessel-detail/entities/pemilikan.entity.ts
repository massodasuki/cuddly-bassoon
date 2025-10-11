import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pemilikan')
export class Pemilikan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nama_pemilik' })
  namaPemilik: string;

  @Column({ name: 'no_kad_pengenalan' })
  noKadPengenalan: string;

  @Column({ name: 'jenis_pemilikan' })
  jenisPemilikan: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column({ name: 'tarikh_pemilikan', type: 'date' })
  tarikhPemilikan: string;

  @Column()
  status: string;
}