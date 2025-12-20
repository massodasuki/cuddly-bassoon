import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pematuhan')
export class PematuhanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  no_pendaftaran: string;

  @Column({ nullable: true })
  tarikh_pemeriksaan_lpi: Date;

  @Column({ nullable: false })
  sebab_pemeriksaan: string;

  @Column({ nullable: false })
  status_pematuhan: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

