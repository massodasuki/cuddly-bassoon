import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profile_company_assets')
export class ProfileCompanyAssetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_profile_id: string;

  @Column({ nullable: false })
  asset_name: string;

  @Column({ nullable: false })
  asset_status: number;

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
