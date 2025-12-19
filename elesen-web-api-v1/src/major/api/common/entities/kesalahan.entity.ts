import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('kesalahan')
export class KesalahanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  no_pendaftaran: string;

  @Column({ nullable: false })
  pesalah: string;

  @Column({ nullable: false })
  no_ic_pesalah: string;

  @Column({ nullable: false })
  akta: string;

  @Column({ nullable: false })
  seksyen: string;

  @Column({ nullable: false })
  kesalahan: string;

  @Column({ nullable: false })
  tarikh: Date;

  @Column({ nullable: false })
  keputusan: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}
