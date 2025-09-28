import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Jetty } from './jetty.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('darat_base_jetties')
export class DaratBaseJetty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('char', { name: 'state_id', length: 36, nullable: true })
  stateId: string | null;

  @Column('char', { name: 'district_id', length: 36, nullable: true })
  districtId: string | null;

  @Column('char', { name: 'river_id', length: 36, nullable: true })
  riverId: string | null;

  @Column('char', { name: 'jetty_id', length: 36, nullable: true })
  jettyId: string | null;

  @ManyToOne(() => Jetty, { nullable: true })
  @JoinColumn({ name: 'jetty_id' })
  jetty: Jetty;

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('bigint', { name: 'entity_id', nullable: true })
  entityId: number | null;

  // @Column('tinyint', { name: 'is_active', default: 1 })
  // isActive: boolean;

  // @Column('char', { name: 'created_by', length: 36, nullable: true })
  // createdBy: string | null;

  // @Column('char', { name: 'updated_by', length: 36, nullable: true })
  // updatedBy: string | null;

  // @Column('char', { name: 'deleted_by', length: 36, nullable: true })
  // deletedBy: string | null;

  // @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  // createdAt: Date | null;

  // @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  // updatedAt: Date | null;

  // @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  // deletedAt: Date | null;

  
}
