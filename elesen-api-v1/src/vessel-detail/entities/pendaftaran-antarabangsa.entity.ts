import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pendaftaran_antarabangsa')
export class PendaftaranAntarabangsa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nama_vesel', nullable: true })
  namaVesel: string | null;

  @Column({ name: 'no_pendaftaran' })
  noPendaftaran: string;

  @Column({ name: 'no_ircs' })
  noIRCS: string;

  @Column({ name: 'no_imo' })
  noIMO: string;

  @Column({ name: 'zon_penangkapan' })
  zonPenangkapan: string;

  @Column({ name: 'spesis_sasaran' })
  spesisSasaran: string;
}