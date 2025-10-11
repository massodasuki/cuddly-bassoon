import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('gambar_enjin')
export class GambarEnjin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'enjin_url' })
  enjinUrl: string;

  @Column({ name: 'no_enjin_url' })
  noEnjinUrl: string;

  @Column({ name: 'penanda_enjin_url' })
  penandaEnjinUrl: string;

  @Column({ name: 'turbo_url' })
  turboUrl: string;

  @Column({ name: 'generator_url' })
  generatorUrl: string;
}