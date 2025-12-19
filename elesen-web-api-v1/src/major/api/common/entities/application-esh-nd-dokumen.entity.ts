import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('application_esh_nd_dokumen')
export class ApplicationEshNdDokumen {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36 })
  application_esh_nd_id: string;

  @Column({ type: 'enum', enum: ['bank', 'kwsp', 'aadk', 'support'] })
  file_type: 'bank' | 'kwsp' | 'aadk' | 'support';

  @Column({ type: 'varchar', length: 255, nullable: true })
  file_desc: string;

  @Column({ type: 'varchar', length: 255 })
  file_name: string;

  @Column({ type: 'varchar', length: 255 })
  file_path: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}