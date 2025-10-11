import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('maklumat_am_vesel')
export class MaklumatAmVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'no_pendaftaran_vesel' })
  noPendaftaranVesel: string;

  @Column({ name: 'no_geran', nullable: true })
  noGeran: string | null;

  @Column({ name: 'no_patil_kekal' })
  noPatilKekal: string;

  @Column({ name: 'tarikh_daftar', type: 'date' })
  tarikhDaftar: string;

  @Column({ name: 'lokasi_pembinaan_vesel' })
  lokasiPembinaanVesel: string;

  @Column({ name: 'negara_asal' })
  negaraAsal: string;

  @Column({ name: 'pemasangan_mtu' })
  pemasanganMTU: boolean;

  @Column({ name: 'no_pendaftaran_mtu', nullable: true })
  noPendaftaranMTU: string | null;

  @Column({ name: 'hak_milik' })
  hakMilik: string;

  @Column({ name: 'kod_rfid_qr' })
  kodRFIDQR: string;

  @Column({ name: 'pengkalan_utama' })
  pengkalanUtama: boolean;

  @Column({ name: 'pelabuhan_utama' })
  pelabuhanUtama: string;

  @Column({ name: 'pelabuhan_tambahan' })
  pelabuhanTambahan: string;
}