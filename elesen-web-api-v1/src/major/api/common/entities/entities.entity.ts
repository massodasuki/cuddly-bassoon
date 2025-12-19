import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entities')
export class EntitieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  parent_id: string;

  @Column({ nullable: false })
  entity_name: string;

  @Column({ nullable: false })
  entity_level: number;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  state_code: string;

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
  fax_no: string;

  @Column({ nullable: true })
  entity_phone_no: string;

}
