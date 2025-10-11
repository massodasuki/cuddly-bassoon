import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { NoPendaftaranVesel } from './no-pendaftaran-vesel.entity';
import { TandaPenukulBesi } from './tanda-penukul-besi.entity';
import { TinPlate } from './tin-plate.entity';
// Add other imports as created

@Entity('borang_lpi')
export class BorangLPI {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => NoPendaftaranVesel, { cascade: true })
  @JoinColumn({ name: 'no_pendaftaran_vesel_id' })
  noPendaftaranVesel: NoPendaftaranVesel;

  @OneToOne(() => TandaPenukulBesi, { cascade: true })
  @JoinColumn({ name: 'tanda_penukul_besi_id' })
  tandaPenukulBesi: TandaPenukulBesi;

  @OneToOne(() => TinPlate, { cascade: true })
  @JoinColumn({ name: 'tin_plate_id' })
  tinPlate: TinPlate;

  @Column({ type: 'boolean' })
  pakuPenandaLebar: boolean;

  // rumahKemudi, pukatTundaBerlesen, ukuranDimensiVesel, enjin, peralatanKeselamatan, kelengkapanMenangkapIkan, peralatan, keadaanVesel, perakuanPegawai, perakuanEmpunyaVesel

  @Column({ type: 'text', nullable: true })
  saizMataPukatTunda: string;

  @Column()
  jenisPeralatanSemasa: string;

  @Column({ type: 'date' })
  tarikhPemeriksaan: Date;
}