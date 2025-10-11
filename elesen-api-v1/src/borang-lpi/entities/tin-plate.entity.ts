import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { BorangLPI } from './borang-lpi.entity';

@Entity('tin_plate')
export class TinPlate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tinPlate: boolean;

  @Column()
  noTinePlate: string;

  @OneToOne(() => BorangLPI, borang => borang.tinPlate)
  @JoinColumn({ name: 'borang_lpi_id' })
  borangLPI: BorangLPI;
}