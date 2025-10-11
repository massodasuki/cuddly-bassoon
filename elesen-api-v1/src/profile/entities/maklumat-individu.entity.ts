import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { MaklumatAm } from './maklumat-am.entity';
import { Alamat } from './alamat.entity';

@Entity('maklumat_individu')
export class MaklumatIndividu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ name: 'profile_picture', nullable: true })
  profilePicture: string;

  @OneToOne(() => MaklumatAm, { cascade: true, eager: true })
  @JoinColumn()
  maklumatAm: MaklumatAm;

  @OneToOne(() => Alamat, { cascade: true, eager: true })
  @JoinColumn()
  alamatSemasa: Alamat;

  @OneToOne(() => Alamat, { cascade: true, eager: true })
  @JoinColumn()
  alamatSurat: Alamat;
}