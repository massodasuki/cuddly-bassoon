import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hebahans')
export class HebahanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  tajuk: string;

  @Column({ nullable: false })
  kandungan: string;

  @Column({ nullable: false })
  tarikh: Date;

  @Column({ nullable: true })
  role_id: string;

  @Column({ nullable: true })
  entity_id: string;

  @Column({ nullable: false })
  status: number;

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
  remark_reject: string;

  @Column({ nullable: true })
  remark_approve: string;

}
