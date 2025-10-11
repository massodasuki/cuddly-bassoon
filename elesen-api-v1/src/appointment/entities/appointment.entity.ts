import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Kehadiran } from './kehadiran.entity';

@Entity('appointment')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Kehadiran, { cascade: true })
  @JoinColumn({ name: 'kehadiran_id' })
  kehadiran: Kehadiran;
}