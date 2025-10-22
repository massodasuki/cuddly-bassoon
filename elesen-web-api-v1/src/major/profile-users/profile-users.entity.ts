import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('profile_users')
export class ProfileUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: number;

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

  @Column({ length: 10, nullable: true })
  poskod: string;

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

  @Column({ length: 10, nullable: true })
  gender: string;

  @Column({ length: 50, nullable: true })
  race: string;

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
}