
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('device_registration')
export class DeviceRegistration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  fcm_token: string;

  @Column({ nullable: true })
  device_name: string;

  @Column({ nullable: true })
  os: string;

  @Column({ nullable: true })
  device_version: string;

  @Column({ nullable: true })
  app_version: string;

  @CreateDateColumn()
  created_at: Date;
}
