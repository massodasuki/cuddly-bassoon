import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';

@Entity('darat_vessel_inspections')
export class DaratVeselLpiFormV1Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  vessel_id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({name:"vessel_registration_number", nullable: true })
  no_vesel: string;

  @Column({ nullable: true, type: 'boolean' })
  no_vesel_ditebuk: boolean;

  @Column({name:"brightly_painted", nullable: true, type: 'boolean' })
  no_vesel_dicat: boolean;

  @Column({ nullable: true, type: 'boolean' })
  no_vesel_di_bumbung: boolean;

  @Column({ nullable: true, type: 'boolean' })
  tanda_bahagian_laluan: boolean;

  @Column({ nullable: true })
  huruf_kod_tanda: string;

  @Column({ nullable: true, type: 'boolean' })
  tin_plate: boolean;

  @Column({ nullable: true })
  no_tin_plate: string;

  @Column({ nullable: true, type: 'boolean' })
  paku_penanda_lebar: boolean;

  @Column({ nullable: true, type: 'boolean' })
  rumah_kemudi_ditebuk: boolean;

  @Column({ nullable: true })
  kod_zon: string;

  @Column({ nullable: true, type: 'boolean' })
  rumah_kemudi_di_bumbung: boolean;

  @Column({ nullable: true, type: 'boolean' })
  jalur_putih: boolean;

  @Column({ nullable: true, type: 'boolean' })
  pukat_tunda_berlesen_dicat: boolean;

  @Column({ nullable: true, type: 'decimal' })
  panjang_meter_dalam_lesen: number;

  @Column({ nullable: true, type: 'decimal' })
  panjang_meter_semasa_diperiksa: number;

  @Column({ nullable: true, type: 'decimal' })
  lebar_meter_dalam_lesen: number;

  @Column({ nullable: true, type: 'decimal' })
  lebar_meter_semasa_diperiksa: number;

  @Column({ nullable: true, type: 'decimal' })
  kedalaman_meter_dalam_lesen: number;

  @Column({ nullable: true, type: 'decimal' })
  kedalaman_meter_semasa_diperiksa: number;

  @Column({ nullable: true, type: 'decimal' })
  muatan_grt_dalam_lesen: number;

  @Column({ nullable: true, type: 'decimal' })
  muatan_grt_semasa_diperiksa: number;

  @Column({ nullable: true, type: 'boolean' })
  is_no_pev: boolean;

  @Column({ nullable: true })
  no_pev: string;

  @Column({ nullable: true })
  jenama_dalam_lesen: string;

  @Column({ nullable: true })
  jenama_semasa_diperiksa: string;

  @Column({ nullable: true })
  model_dalam_lesen: string;

  @Column({ nullable: true })
  model_semasa_diperiksa: string;

  @Column({ nullable: true, type: 'decimal' })
  kuasa_kuda_dalam_lesen: number;

  @Column({ nullable: true, type: 'decimal' })
  kuasa_kuda_semasa_diperiksa: number;

  @Column({ nullable: true })
  no_enjin_dalam_lesen: string;

  @Column({ nullable: true })
  no_enjin_semasa_diperiksa: string;

  @Column({ nullable: true })
  vesel_keseluruhan_img: string;

  @Column({ nullable: true })
  enjin_img: string;

  @Column({ nullable: true })
  no_enjin_img: string;

  @Column({ nullable: true })
  penanda_enjin_img: string;

  @Column({ nullable: true })
  turbo_img: string;

  @Column({ nullable: true })
  generator_img: string;

  @Column({ nullable: true })
  pelampung_keselamatan_status: string;

  @Column({ nullable: true })
  pelampung_keselamatan_keadaan: string;

  @Column({ nullable: true })
  pelampung_keselamatan_kuantiti: string;

  @Column({ nullable: true })
  boya_keselamatan_status: string;

  @Column({ nullable: true })
  boya_keselamatan_keadaan: string;

  @Column({ nullable: true })
  boya_keselamatan_kuantiti: string;

  @Column({ nullable: true })
  alat_pemadam_api_status: string;

  @Column({ nullable: true })
  alat_pemadam_api_keadaan: string;

  @Column({ nullable: true })
  alat_pemadam_api_kuantiti: string;

  @Column({ nullable: true })
  lampu_pelayaran_status: string;

  @Column({ nullable: true })
  lampu_pelayaran_keadaan: string;

  @Column({ nullable: true })
  lampu_pelayaran_kuantiti: string;

  @Column({ nullable: true })
  rakit_keselamatan_status: string;

  @Column({ nullable: true })
  rakit_keselamatan_keadaan: string;

  @Column({ nullable: true })
  rakit_keselamatan_kuantiti: string;

  @Column({ nullable: true })
  mtu_status: string;

  @Column({ nullable: true })
  mtu_keadaan: string;

  @Column({ nullable: true })
  mtu_kuantiti: string;

  @Column({ nullable: true })
  ais_status: string;

  @Column({ nullable: true })
  ais_keadaan: string;

  @Column({ nullable: true })
  ais_kuantiti: string;

  @Column({ nullable: true, type: 'boolean' })
  gps: boolean;

  @Column({ nullable: true, type: 'boolean' })
  echo_sounder: boolean;

  @Column({ nullable: true, type: 'boolean' })
  radar: boolean;

  @Column({ nullable: true, type: 'boolean' })
  sat_navigation: boolean;

  @Column({ nullable: true, type: 'boolean' })
  sonar: boolean;

  @Column({ nullable: true, type: 'boolean' })
  fish_finder: boolean;

  @Column({ nullable: true, type: 'boolean' })
  radio_wireless: boolean;

  @Column({ nullable: true, type: 'boolean' })
  atur: boolean;

  @Column({ nullable: true, type: 'boolean' })
  net_houler: boolean;

  @Column({ nullable: true, type: 'boolean' })
  power_block: boolean;

  @Column({ nullable: true, type: 'boolean' })
  net_drum: boolean;

  @Column({ nullable: true, type: 'boolean' })
  rsw: boolean;

  @Column({ nullable: true, type: 'boolean' })
  cctv: boolean;

  @Column({ nullable: true })
  peralatan_utama: string;

  @Column({ nullable: true })
  peralatan_tambahan: string;

  @Column({ nullable: true, type: 'decimal' })
  size_mata_pukat: number;

  @Column({ nullable: true })
  peralatan_dijumpai: string;

  @Column({ nullable: true })
  keadaan_vesel_semasa: string;

  @Column({ nullable: true, type: 'boolean' })
  vesel_asal: boolean;

  @Column({ nullable: true })
  jenis_kulit_vesel: string;

  @Column({ nullable: true, type: 'boolean' })
  vesel_baru: boolean;

  @Column({ nullable: true })
  tarikh_pemeriksaan: Date;

  @Column({ nullable: true, type: 'boolean' })
  permohonan_di_sokong: boolean;

  @Column({ nullable: true })
  permohonan_tarikh_pemeriksaan: Date;

  @Column({ nullable: true })
  tanda_tangan_pembantu_img: string;

  @Column({ nullable: true })
  tandatangan_pegawai_img: string;

  @Column({ nullable: true })
  jenis_permohonan: string;

  @Column({ nullable: true })
  perakuan_pemilik_tarikh_pemeriksaan: Date;

  @Column({ nullable: true })
  tanda_tangan_empunya_vesel_img: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  // FK
  @OneToOne(() => DaratApplicationEntity, da => da.daratVesselInspectionV1)
  @JoinColumn({ name: 'application_id' })
  daratApplication: DaratApplicationEntity;

  @ManyToOne(() => DaratVesselEntity, { nullable: true })
  @JoinColumn({ name: 'vessel_id' })
  daratVessel: DaratVesselEntity;
}