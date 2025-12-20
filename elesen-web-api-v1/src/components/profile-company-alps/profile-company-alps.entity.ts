import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_company_alps')
export class ProfileCompanyAlpEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_profile_id: string;

  @Column({ nullable: false })
  alp_name: string;

  @Column({ nullable: false })
  alp_icno: string;

  @Column({ nullable: true })
  alp_email: string;

  @Column({ nullable: false })
  alp_phone_no: string;

  @Column({ nullable: false })
  alp_position: string;

  @Column({ nullable: false })
  alp_citizenship: number;

  @Column({ nullable: false })
  alp_status: number;

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

