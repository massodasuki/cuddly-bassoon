import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_user_details')
export class DaratUserDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: false })
  identity_card_number: string;

  @Column({ nullable: true })
  fishing_transport_type: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  deleted_at: Date;

}
