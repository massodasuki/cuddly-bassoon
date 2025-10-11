import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { BorangLPI } from './borang-lpi.entity';

@Entity('tanda_penukul_besi')
export class TandaPenukulBesi {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tandaBahagianLaluan: boolean;

  @Column({ nullable: true })
  hurufKodTanda: string;

  @OneToOne(() => BorangLPI, borang => borang.tandaPenukulBesi)
  @JoinColumn({ name: 'borang_lpi_id' })
  borangLPI: BorangLPI;
}