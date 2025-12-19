import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { CodeMaster } from '../../common/code-masters/code-masters.entity';
import { UserEntity } from '../entities/user.entity';
import { ProfilePentadbirHartaEntity } from '../../marin/entities/profile-pentadbir-hartas.entity';

@Entity('profile_users')
export class ProfileUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 20, nullable: true })
  icno: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  address1: string;

  @Column({ type: 'text', nullable: true })
  address2: string;

  @Column({ type: 'text', nullable: true })
  address3: string;

  @Column({ nullable: true })
  poskod: number;

  @Column({ length: 100, nullable: true })
  district: string;

  @Column({ length: 100, nullable: true })
  state: string;

  @Column({ length: 50, nullable: true })
  user_type: string;

  @Column({ length: 20, nullable: true })
  no_phone: string;

  @Column({ length: 20, nullable: true })
  no_phone_office: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ length: 50, nullable: true })
  wedding_status: string;

  @Column({ type: 'tinyint', nullable: true })
  bumiputera_status: number;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @Column({ type: 'datetime', nullable: true })
  verified_at: Date;

  @Column({ type: 'tinyint', default: 0 })
  verify_status: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;


  @Column({ nullable: true })
  parliament: string;

  @Column({ nullable: true })
  parliament_seat: string;

  @Column({ nullable: true })
  salinan_ic: string;

  @Column({ nullable: true })
  no_vesel: string;

  @Column({ nullable: true })
  document: string;


  @Column({ nullable: true })
  oku_status: number;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  verification_modal_shown: number;

  @Column({ nullable: true })
  ulasan: string;

  @Column({ nullable: true })
  ref: string;

  @Column({ nullable: true })
  phone_code: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  phone_office_code: string;

  @Column({ nullable: true })
  phone_office: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  is_bumiputera: number;

  @Column({ nullable: false })
  is_active_ajim: number;

  @Column({ nullable: true })
  secondary_phone_number: string;

  @Column({ nullable: true })
  secondary_address_1: string;

  @Column({ nullable: true })
  secondary_address_2: string;

  @Column({ nullable: true })
  secondary_address_3: string;

  @Column({ nullable: true })
  secondary_postcode: string;

  @Column({ nullable: true })
  secondary_district: string;

  @Column({ nullable: true })
  secondary_state: string;


  @OneToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'gender_id' })
  gender: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'religion_id' })
  religion: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'race_id' })
  race: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'marital_status_id' })
  marital_status: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'type_id' })
  type: CodeMaster;

  @OneToOne(() => ProfilePentadbirHartaEntity, pentadbirHartas => pentadbirHartas.id, { cascade: true })
  pentadbirHartas: ProfilePentadbirHartaEntity;
}