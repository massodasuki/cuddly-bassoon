import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { DaratApplicationEntity } from '../../darat/entities/darat-applications.entity';

export enum KehadiranEnum {
  HADIR = 'Hadir',
  TIDAK_HADIR = 'Tidak hadir',
  TANGGUH_PEMERIKSAAN = 'Tangguh pemeriksaan',
}

export enum DihadiriOlehEnum {
  PEMILIK = 'Pemilik',
  WAKIL = 'Wakil',
}

export enum StatusEnum {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UPDATED = 'updated',
  POSTPONED = 'postponed',
}

@Entity('appointments_inspections')
export class AppointmentsInspections {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  applications_id: string;

  @ManyToOne(() => DaratApplicationEntity, { nullable: true })
  @JoinColumn({ name: 'applications_id' })
  daratApplication: DaratApplicationEntity;

  @Column({ type: 'varchar', length: 255 })
  no_vessel: string;

  @Column({ type: 'enum', enum: KehadiranEnum })
  kehadiran: KehadiranEnum;

  @Column({ type: 'enum', enum: DihadiriOlehEnum, nullable: true })
  dihadiri_oleh?: DihadiriOlehEnum;

  @Column({ type: 'varchar', length: 255, nullable: true })
  wakil_nama?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  wakil_no_ic?: string;

  @Column({ type: 'text', nullable: true })
  wakil_surat_wakil?: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  ulasan?: string;

  @Column({ type: 'enum', enum: StatusEnum, nullable: true })
  status?: StatusEnum;

  @Column({ type: 'timestamp', nullable: true })
  timestamp?: Date;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;

  @BeforeInsert()
  setCreatedAt() {
    this.created_at = new Date();
  }
}
