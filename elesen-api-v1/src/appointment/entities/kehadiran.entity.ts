import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Wakil } from './wakil.entity';

@Entity('kehadiran')
export class Kehadiran {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean' })
  hadir: boolean;

  @Column({ type: 'boolean' })
  pemilik: boolean;

  @OneToOne(() => Wakil, { cascade: true })
  @JoinColumn({ name: 'wakil_id' })
  wakil: Wakil;
}