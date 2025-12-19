
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from 'typeorm';
import { EntitieEntity } from '../common/entities/entities.entity';
import { ProfilePentadbirHartaEntity } from '../common/entities/profile-pentadbir-hartas.entity';

@Entity('vessels')
export class VesselEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  user_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zon: string;

  @Column({ type: 'double', precision: 8, scale: 2, nullable: true })
  grt: number;

  @Column({ type: 'char', length: 36, nullable: true })
  peralatan_utama: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pendaftaran: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  negeri: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  daerah: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  pangkalan: string;

  @Column({ type: 'int', unsigned: true, nullable: true })
  bil_enjin: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  kategori_vessel: string;

  @Column({ type: 'date', nullable: true })
  license_start: Date;

  @Column({ type: 'date', nullable: true })
  license_end: Date;

  @ManyToOne(() => EntitieEntity, { nullable: true })
  @JoinColumn({ name: 'entity_id' })
  entity: EntitieEntity;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

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

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ type: 'tinyint', default: 1 })
  is_active: boolean;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  pangkalan_utama_id: number;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  pangkalan_tambahan_id: number;

  @Column({ type: 'varchar', length: 255 })
  vessel_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  zone: string;

  @Column({ type: 'datetime', nullable: true })
  start_date: Date;

  @Column({ type: 'datetime', nullable: true })
  end_date: Date;

  @OneToOne(() => ProfilePentadbirHartaEntity, pentadbirHartas => pentadbirHartas.vessel, { cascade: true })
  pentadbirHartas: ProfilePentadbirHartaEntity;

}
