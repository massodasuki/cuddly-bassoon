import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MaklumatIndividu } from './maklumat-individu.entity';
import { MaklumatKewangan } from './maklumat-kewangan.entity';
import { PengkalanPendaratan } from './pengkalan-pendaratan.entity';
import { Vessel } from './vessel.entity';
import { Jeti } from './jeti.entity';
import { AktivitiPenangkapanIkan } from './aktiviti-penangkapan-ikan.entity';
import { Kesalahan } from './kesalahan.entity';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MaklumatIndividu, { cascade: true, eager: true })
  @JoinColumn()
  maklumatIndividu: MaklumatIndividu;

  @OneToOne(() => MaklumatKewangan, { cascade: true, eager: true })
  @JoinColumn()
  maklumatKewangan: MaklumatKewangan;

  @OneToOne(() => PengkalanPendaratan, { cascade: true, eager: true })
  @JoinColumn()
  pengkalanPendaratan: PengkalanPendaratan;

  @OneToOne(() => Vessel, { cascade: true, eager: true })
  @JoinColumn()
  vessel: Vessel;

  @OneToOne(() => Jeti, { cascade: true, eager: true })
  @JoinColumn()
  jeti: Jeti;

  @OneToOne(() => AktivitiPenangkapanIkan, { cascade: true, eager: true })
  @JoinColumn()
  aktivitiPenangkapanIkan: AktivitiPenangkapanIkan;

  @OneToOne(() => Kesalahan, { cascade: true, eager: true })
  @JoinColumn()
  kesalahan: Kesalahan;
}