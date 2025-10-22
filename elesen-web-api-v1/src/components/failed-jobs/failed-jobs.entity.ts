import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('failed_jobs')
export class FailedJobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uuid: string;

  @Column({ nullable: false })
  connection: string;

  @Column({ nullable: false })
  queue: string;

  @Column({ nullable: false })
  payload: string;

  @Column({ nullable: false })
  exception: string;

  @Column({ nullable: false })
  failed_at: Date;

}
