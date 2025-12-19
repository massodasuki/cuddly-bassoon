import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('serial_numbers')
export class SerialNumberEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  application_type: string;

  @Column({ nullable: false })
  prefix: string;

  @Column({ nullable: false })
  running_number: number;

  @Column({ nullable: false })
  suffix: string;

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
  application_id: string;

}
