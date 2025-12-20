import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('immigration_offices')
export class ImmigrationOfficeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  office_number: string;

  @Column({ nullable: true })
  office_email: string;

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

