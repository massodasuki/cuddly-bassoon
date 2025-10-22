import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { MaklumatAmVesel } from './maklumat-am-vesel.entity';
import { Lesen } from './lesen.entity';
import { Kulit } from './kulit.entity';
import { Enjin } from './enjin.entity';
import { Peralatan } from './peralatan.entity';
import { Kru } from './kru.entity';
import { Pengkalan } from './pengkalan.entity';
import { Pemilikan } from './pemilikan.entity';
import { Kesalahan } from './kesalahan.entity';
import { PendaftaranAntarabangsa } from './pendaftaran-antarabangsa.entity';

@Entity('profil_vesel')
export class ProfilVesel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MaklumatAmVesel, { cascade: true, eager: true })
  @JoinColumn()
  maklumatAmVesel: MaklumatAmVesel;

  @OneToOne(() => Lesen, { cascade: true, eager: true })
  @JoinColumn()
  lesen: Lesen;

  @OneToOne(() => Kulit, { cascade: true, eager: true })
  @JoinColumn()
  kulit: Kulit;

  @OneToOne(() => Enjin, { cascade: true, eager: true })
  @JoinColumn()
  enjin: Enjin;

  @OneToMany(() => Peralatan, peralatan => peralatan.profilVesel, { cascade: true, eager: true })
  peralatan: Peralatan[];

  @OneToMany(() => Kru, kru => kru.profilVesel, { cascade: true, eager: true })
  kru: Kru[];

  @OneToMany(() => Pengkalan, pengkalan => pengkalan.profilVesel, { cascade: true, eager: true })
  pengkalan: Pengkalan[];

  @OneToOne(() => Pemilikan, { cascade: true, eager: true })
  @JoinColumn()
  pemilikan: Pemilikan;

  @OneToOne(() => Kesalahan, { cascade: true, eager: true })
  @JoinColumn()
  kesalahan: Kesalahan;

  @OneToOne(() => PendaftaranAntarabangsa, { cascade: true, eager: true })
  @JoinColumn()
  pendaftaranAntarabangsa: PendaftaranAntarabangsa;
}