import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MaklumatBank } from './maklumat-bank.entity';
import { MaklumatTambahan } from './maklumat-tambahan.entity';

@Entity('maklumat_kewangan')
export class MaklumatKewangan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MaklumatBank, { cascade: true, eager: true })
  @JoinColumn()
  maklumatBank: MaklumatBank;

  @OneToOne(() => MaklumatTambahan, { cascade: true, eager: true })
  @JoinColumn()
  maklumatTambahan: MaklumatTambahan;
}