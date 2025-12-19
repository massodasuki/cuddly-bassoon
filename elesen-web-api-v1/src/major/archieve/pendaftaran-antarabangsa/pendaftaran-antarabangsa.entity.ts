import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pendaftaran_antarabangsa')
export class PendaftaranAntarabangsaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  vessel_id: string;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: true })
  no_ircs: string;

  @Column({ nullable: true })
  no_rfmo: string;

  @Column({ nullable: true })
  no_imo: string;

  @Column({ nullable: false })
  kawasan_penangkapan: string;

  @Column({ nullable: false })
  spesis_sasaran: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
