import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('maklumat_am_enjin')
export class MaklumatAmEnjin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'jenis_enjin' })
  jenisEnjin: string;

  @Column({ name: 'bahan_api' })
  bahanApi: string;

  @Column({ name: 'jenama_enjin' })
  jenamaEnjin: string;

  @Column({ name: 'kuasa_kuda', type: 'int' })
  kuasaKuda: number;

  @Column({ name: 'no_enjin' })
  noEnjin: string;

  @Column()
  model: string;

  @Column({ nullable: true })
  turbo: string | null;

  @Column({ name: 'tarikh_pev', type: 'date' })
  tarikhPEV: string;

  @Column({ name: 'kategori_enjin' })
  kategoriEnjin: string;

  @Column()
  status: string;
}