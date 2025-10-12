import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_temporary_pins')
export class DaratTemporaryPinEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_id: string;

  @Column({ nullable: false })
  pin_number: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  expires_at: Date;

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
