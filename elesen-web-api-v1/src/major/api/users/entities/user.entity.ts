import { ProfileUserEntity } from '../../common/entities/profile-users.entity';
import { RoleEntity } from '../../common/entities/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinTable, ManyToMany } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  email_verified_at: Date;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  remember_token: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  is_admin: number;

  @Column({ nullable: true })
  user_type: number;

  @Column({ nullable: true })
  profile_picture: string;

  @Column({ nullable: true })
  last_online_at: Date;

  @Column({ nullable: true })
  bumiputera_type: number;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  contact_number: string;

  @Column({ nullable: true })
  mobile_contact_number: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  deleted_at: Date;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: true })
  position_id: string;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  watikah_status: number;

  @Column({ nullable: true })
  is_first_login: number;

  @OneToOne(() => ProfileUserEntity, profile => profile.user)
  profile: ProfileUserEntity;

  @ManyToMany(() => RoleEntity, role => role.users)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: RoleEntity[];

}