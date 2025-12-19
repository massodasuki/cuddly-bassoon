import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('kesalahan')
export class KesalahanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  no_ic_pesalah: string;

  @Column({ nullable: true })
  akta: string;

  @Column({ nullable: true })
  seksyen: string;

  @Column({ nullable: true })
  kesalahan: string;

  @Column({ nullable: true })
  tarikh: Date;

  @Column({ nullable: true })
  keputusan: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ nullable: true })
  is_active: number;
}