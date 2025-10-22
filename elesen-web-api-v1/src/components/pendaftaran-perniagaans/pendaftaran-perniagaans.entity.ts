import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pendaftaran_perniagaans')
export class PendaftaranPerniagaanEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_id: string;

  @Column({ nullable: true })
  company_reg_no: string;

  @Column({ nullable: true })
  company_reg_date: Date;

  @Column({ nullable: true })
  company_exp_date: Date;

  @Column({ nullable: false })
  business_status: number;

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
