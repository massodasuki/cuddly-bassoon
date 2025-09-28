import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CatchingLocation } from './catching-location.entity';
import { FishLanding } from './fish-landing.entity';

@Entity('fishing_log_nds')
export class FishingLog {
  @PrimaryColumn('char', { name: 'fishing_log_id', length: 36 })
  fishingLogId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('date')
  date: Date;

  // @Column('tinyint', { name: 'is_active', default: 1 })
  // isActive: boolean;

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

  // @CreateDateColumn({ name: 'created_at', nullable: true })
  // createdAt: Date | null;

  // @UpdateDateColumn({ name: 'updated_at', nullable: true })
  // updatedAt: Date | null;

  // @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  // deletedAt: Date | null;

  @OneToMany(() => CatchingLocation, catchingLocation => catchingLocation.fishingLog)
  catching_location_nds: CatchingLocation[];

  @OneToMany(() => FishLanding, fishLanding => fishLanding.fishingLog)
  fish_landings: FishLanding[];
}