import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';
import { CodeMaster } from '../../../components/code-masters/code-masters.entity';

@Entity('entities')
export class EntitieEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'char', length: 36, nullable: true })
  parent_id: string;

  @ManyToOne(() => EntitieEntity, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: EntitieEntity;

  @Column({ type: 'varchar', length: 255 })
  entity_name: string;

  @Column({ type: 'int' })
  entity_level: number;

  @Column({ type: 'tinyint', width: 1 })
  is_active: boolean;

  @Column({ type: 'varchar', length: 255 })
  state_code: string;

  @Column({ type: 'char', length: 36, nullable: true })
  created_by: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @Column({ type: 'char', length: 36, nullable: true })
  updated_by: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserEntity;

  @Column({ type: 'char', length: 36, nullable: true })
  deleted_by: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'deleted_by' })
  deletedBy: UserEntity;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address1: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address2: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address3: string;

  @Column({ type: 'varchar', length: 5, nullable: true })
  postcode: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  city: string;

  @Column({ type: 'char', length: 36, nullable: true })
  district_id: string;

  @ManyToOne(() => CodeMaster, { nullable: true })
  @JoinColumn({ name: 'district_id' })
  district: CodeMaster;

  @Column({ type: 'char', length: 36, nullable: true })
  state_id: string;

  @ManyToOne(() => CodeMaster, { nullable: true })
  @JoinColumn({ name: 'state_id' })
  state: CodeMaster;

  @Column({ type: 'varchar', length: 255, nullable: true })
  fax_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  entity_phone_no: string;

  @OneToMany(() => EntitieEntity, entity => entity.parent)
  children: EntitieEntity[];
}