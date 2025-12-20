import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_company_accounts')
export class ProfileCompanyAccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_profile_id: string;

  @Column({ nullable: false })
  account_year: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: true })
  filename: string;

  @Column({ nullable: false })
  is_deleted: number;

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

