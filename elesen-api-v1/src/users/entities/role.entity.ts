import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('roles')
export class Role {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'tinyint', width: 1 })
  is_active: boolean;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by?: string;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by?: string;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by?: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;

  @Column({ type: 'int', nullable: true })
  quota?: number;

  @Column({ type: 'int', nullable: true })
  level?: number;

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id?: string;

  @ManyToMany(() => User, user => user.roles)
  users: User[];
}
