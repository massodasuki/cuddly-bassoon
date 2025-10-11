import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { BorangLPI } from './borang-lpi.entity';

@Entity('no_pendaftaran_vesel')
export class NoPendaftaranVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  diTebuk: boolean;

  @Column()
  diCat: boolean;

  @OneToOne(() => BorangLPI, borang => borang.noPendaftaranVesel)
  @JoinColumn({ name: 'borang_lpi_id' })
  borangLPI: BorangLPI;
}