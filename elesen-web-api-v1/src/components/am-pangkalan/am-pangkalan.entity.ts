import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('am_pangkalan')
export class AmPangkalan {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_rujukan_permohonan: string;

  @Column({ type: 'varchar', length: 255 })
  nama_pangkalan: string;

  @Column({ type: 'enum', enum: ['Utama', 'Tambahan'] })
  jenis_pangkalan: 'Utama' | 'Tambahan';

  @Column({ type: 'varchar', length: 255 })
  daerah: string;

  @Column({ type: 'varchar', length: 255 })
  negeri: string;

  @Column({ type: 'date', nullable: true })
  tarikh_mula_beroperasi: Date;

  @Column({ type: 'enum', enum: ['Aktif', 'Tidak Aktif'], default: 'Aktif' })
  status: 'Aktif' | 'Tidak Aktif';

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}
