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

@Entity('catching_location_nds')
export class CatchingLocation {
  @PrimaryColumn('char', { name : 'catching_location_id', length: 36 })
  catchingLocationId: string;

  @Column('char', { name: 'fishing_log_id', length: 36 })
  fishingLogId: string;

  @ManyToOne(() => FishingLog)
  @JoinColumn({ name: 'fishing_log_id' })
  fishingLog: FishingLog;

  @Column('varchar', { name: 'state_name', length: 255 })
  stateName: string;

  @Column('varchar', { name: 'district_name', length: 255 })
  districtName: string;

  @Column('varchar', { name: 'river_name', length: 255 })
  riverName: string;

  @Column('varchar', { name: 'location_name', length: 255 })
  locationName: string;

  @Column('decimal', { name: 'latitude', precision: 10, scale: 6, nullable: true })
  latitude: number | null;

  @Column('decimal', { name: 'longitude', precision: 10, scale: 6, nullable: true })
  longitude: number | null;

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