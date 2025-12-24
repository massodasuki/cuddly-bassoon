import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { CodeMaster } from '../../common/code-masters/code-masters.entity';

@Entity('user_bank_accounts')
export class UserBankAccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false, length: 50 })
  account_number: string;

  @Column({ nullable: false, length: 100 })
  account_owner: string;

  @Column({ nullable: false })
  bank_code_cm_id: string;

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

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'bank_code_cm_id' })
  bankCode: CodeMaster;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UserEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'deleted_by' })
  deletedBy: UserEntity;
}