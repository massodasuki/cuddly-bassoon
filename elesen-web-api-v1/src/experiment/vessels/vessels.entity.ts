import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('vessels')
export class VesselEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'vessel_no', type: 'varchar', length: 255, nullable: true })
  vesselNo: string;

  @Column({ name: 'no_pendaftaran', type: 'varchar', length: 255, nullable: true })
  noPendaftaran: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  grt: number;

  @Column({ name: 'kategori_vessel', type: 'varchar', length: 255, nullable: true })
  kategoriVessel: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zon: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  negeri: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  daerah: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pangkalan: string;

  @Column({ name: 'bil_enjin', type: 'int', nullable: true })
  bilEnjin: number;

  @Column({ name: 'license_start', type: 'date', nullable: true })
  licenseStart: Date;

  @Column({ name: 'license_end', type: 'date', nullable: true })
  licenseEnd: Date;

  @Column({ name: 'is_active', type: 'tinyint', width: 1, default: 1 })
  isActive: boolean;

  @Column({ name: 'user_id', type: 'int', nullable: true })
  userId: number;

  @Column({ name: 'entity_id', type: 'int', nullable: true })
  entityId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}