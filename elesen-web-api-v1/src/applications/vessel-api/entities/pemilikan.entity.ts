import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * PemilikanEntity - Represents vessel ownership records
 * This entity stores information about vessel ownership including owner details,
 * registration, and ownership status.
 */
@Entity('pemilikan')
export class PemilikanEntity {
  /** Primary key - Auto-generated unique identifier */
  @PrimaryGeneratedColumn()
  id: number;

  /** Registration number of the vessel */
  @Column({ nullable: true })
  no_pendaftaran: string;

  /** Name of the owner (individual or company) */
  @Column({ nullable: false })
  nama_pemilik: string;

  /** IC number (for individual) or company registration number */
  @Column({ nullable: true })
  no_ic_atau_syarikat: string;

  /** Type of ownership (e.g., individual, company, partnership) */
  @Column({ nullable: false })
  jenis_pemilikan: string;

  /** State where the ownership is registered */
  @Column({ nullable: false })
  negeri: string;

  /** District where the ownership is registered */
  @Column({ nullable: false })
  daerah: string;

  /** Date when the ownership became active */
  @Column({ nullable: false })
  tarikh_aktif_pemilikan: Date;

  /** Current status of the ownership (e.g., active, inactive, transferred) */
  @Column({ nullable: false })
  status_pemilikan: string;

  /** Timestamp when the record was created */
  @Column({ nullable: true })
  created_at: Date;

  /** Timestamp when the record was last updated */
  @Column({ nullable: true })
  updated_at: Date;
}

