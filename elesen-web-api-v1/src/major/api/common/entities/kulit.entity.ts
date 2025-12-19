import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('kulit')
export class KulitEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  no_pendaftaran: string;

  @Column({ nullable: true })
  jenis_kulit: string;

  @Column({ nullable: true })
  panjang: string;

  @Column({ nullable: true })
  lebar: string;

  @Column({ nullable: true })
  tinggi: string;

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