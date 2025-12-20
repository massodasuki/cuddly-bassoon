import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maklumat_syarikats')
export class MaklumatSyarikatEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  company_name: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ nullable: true })
  poskod: number;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  ownership: string;

  @Column({ nullable: true })
  bumiputera_status: number;

  @Column({ nullable: true })
  no_phone: string;

  @Column({ nullable: true })
  no_phone_office: string;

  @Column({ nullable: true })
  no_fax: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  company_status: string;

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

