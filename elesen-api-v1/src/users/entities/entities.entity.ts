import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Vessels } from '../../vessels/entities/vessel.entity';

@Entity('entities')
export class Entities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('char', { length: 36, nullable: true })
  parent_id: string | null;

  @Column({ type: 'varchar', length: 255 })
  entity_name: string;

  @Column({ type: 'int' })
  entity_level: number;

  @Column({ type: 'tinyint', width: 1 })
  is_active: boolean;

  @Column({ type: 'varchar', length: 255 })
  state_code: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  created_by_user: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updated_by_user: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'deleted_by' })
  deleted_by_user: User;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @OneToMany(() => Vessels, (vessel) => vessel.entity)
  vessels: Vessels[];
}
