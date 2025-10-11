import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { MaklumatAmEnjin } from  './maklumat-am-enjin.entity';
import { GambarEnjin } from  './gambar-enjin.entity';

@Entity('enjin')
export class Enjin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MaklumatAmEnjin, { cascade: true, eager: true })
  @JoinColumn()
  maklumatAmEnjin: MaklumatAmEnjin;

  @OneToOne(() => GambarEnjin, { cascade: true, eager: true })
  @JoinColumn()
  gambar: GambarEnjin;
}