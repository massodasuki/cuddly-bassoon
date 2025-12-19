import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable, OneToOne } from 'typeorm';
import { RoleEntity } from './roles.entity';
import { ProfileUserEntity } from './profile-users.entity';

@Entity('users')
export class UserEntity {
   @PrimaryColumn({ type: 'char', length: 36 })
   id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'tinyint', default: 0 })
  is_admin: number;

  @Column({ type: 'int', nullable: true })
  user_type: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profile_picture: string;

  @Column({ type: 'timestamp', nullable: true })
  last_online_at: Date;

  @Column({ type: 'int', nullable: true })
  bumiputera_type: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address3: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  postcode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  district: string;

  @Column({ type: 'char', length: 36, nullable: true })
  state_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  contact_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  mobile_contact_number: string;

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

  @Column({ type: 'char', length: 36, nullable: true })
  entity_id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  position_id: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ type: 'int', nullable: true })
  watikah_status: number;

  @Column({ type: 'tinyint', default: 1 })
  is_first_login: number;

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable()
  roles?: RoleEntity[];

  @OneToOne(() => ProfileUserEntity, profile => profile.user)
  profile?: ProfileUserEntity;
}