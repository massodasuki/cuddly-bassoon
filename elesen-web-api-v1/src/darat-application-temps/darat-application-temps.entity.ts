import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_application_temps')
export class DaratApplicationTempEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  application_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  form_data: any;

  @Column({ nullable: false })
  status: string;

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
