import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { FishingLog } from './fishing-log.entity';
import { FishSpecies } from '../../fish-species/entities/fish-species.entity';

@Entity('fish_landing_nds')
export class FishLanding {
  @PrimaryColumn('char', { name: 'fish_landing_nds', length: 36 })
  fishLandingId: string;

  @Column('char', { name: 'fishing_log_id', length: 36 })
  fishingLogId: string;

  @ManyToOne(() => FishingLog)
  @JoinColumn({ name: 'fishing_log_id' })
  fishingLog: FishingLog;

  @Column('char', { name: 'fish_species_id', length: 36 })
  fishSpeciesId: string;

  @ManyToOne(() => FishSpecies)
  @JoinColumn({ name: 'fish_species_id' })
  fish_species_id: FishSpecies;

  @Column('decimal', { name: 'total_weight_kg', precision: 8, scale: 2, default: 0.00 })
  total_weight_kg: number;

  @Column('date', { name: 'landing_date' })
  landing_date: Date;

  // @Column('char', { name: 'created_by', length: 36, nullable: true })
  // createdBy: string | null;

  // @ManyToOne(() => User, { nullable: true })
  // @JoinColumn({ name: 'created_by' })
  // createdByUser: User | null;

  // @Column('char', { name: 'updated_by', length: 36, nullable: true })
  // updatedBy: string | null;

  // @ManyToOne(() => User, { nullable: true })
  // @JoinColumn({ name: 'updated_by' })
  // updatedByUser: User | null;

  // @Column('char', { name: 'deleted_by', length: 36, nullable: true })
  // deletedBy: string | null;

  // @ManyToOne(() => User, { nullable: true })
  // @JoinColumn({ name: 'deleted_by' })
  // deletedByUser: User | null;

  // @Column('tinyint', { name: 'is_active', default: 1 })
  // isActive: boolean;

  // @CreateDateColumn({ name: 'created_at', nullable: true })
  // createdAt: Date | null;

  // @UpdateDateColumn({ name: 'updated_at', nullable: true })
  // updatedAt: Date | null;

  // @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  // deletedAt: Date | null;
}