import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';
import { User } from '../users/entities/user.entity';

@Entity('jetties')
export class Jetty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ length: 255, nullable: true })
  name: string;

  // @Column({ default: true })
  // is_active: boolean;

  // @Column({ nullable: true })
  // created_by: string;

  // @Column({ nullable: true })
  // updated_by: string;

  // @Column({ nullable: true })
  // deleted_by: string;

  // @CreateDateColumn({ nullable: true })
  // created_at: Date;

  // @UpdateDateColumn({ nullable: true })
  // updated_at: Date;

  // @DeleteDateColumn({ nullable: true })
  // deleted_at: Date;

  @Column({ nullable: true })
  parliament_id: string;

  @Column({ nullable: true })
  parliament_seat_id: string;

  @ManyToMany(() => User, user => user.jetty)
  users: User[];
}