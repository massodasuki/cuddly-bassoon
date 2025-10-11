import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('kesalahan')
export class Kesalahan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  akta: string;

  @Column({ nullable: true })
  seksyen: string;

  @Column({ nullable: true })
  kesalahan: string;

  @Column({ type: 'date', nullable: true })
  tarikh: Date;

  @Column({ nullable: true })
  keputusan: string;
}