import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('confiscation')
export class ConfiscationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  subsistence_id: string;

  @Column({ nullable: true })
  fullname: string;

  @Column({ nullable: true })
  icno: string;

  @Column({ nullable: true })
  lucut_hak: string;

  @Column({ nullable: true })
  confiscation_reason_id: string;

  @Column({ nullable: true })
  remark_lucut: string;

  @Column({ nullable: true })
  update_by: string;

  @Column({ nullable: true })
  support_lucut: string;

  @Column({ nullable: true })
  remark_support: string;

  @Column({ nullable: true })
  support_by: string;

  @Column({ nullable: true })
  approve_lucut: string;

  @Column({ nullable: true })
  remark_approve: string;

  @Column({ nullable: true })
  approve_by: string;

  @Column({ nullable: true })
  status: string;

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

}
