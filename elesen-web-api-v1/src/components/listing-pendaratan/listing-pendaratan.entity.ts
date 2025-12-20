import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('listing_pendaratan')
export class ListingPendaratanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  pelayaran_no: string;

  @Column({ nullable: false })
  vessel_id: string;

  @Column({ nullable: false })
  bulan: string;

  @Column({ nullable: false })
  jumlah_hari_di_laut: number;

  @Column({ nullable: false })
  tarikh_masa_berlepas: Date;

  @Column({ nullable: false })
  tarikh_masa_tiba: Date;

  @Column({ nullable: false })
  purata_masa_memukat: string;

  @Column({ nullable: true })
  dokumen_nama: string;

  @Column({ nullable: true })
  dokumen_type: string;

  @Column({ nullable: true })
  dokumen: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

