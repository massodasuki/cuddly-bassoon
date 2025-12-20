import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('announcements')
export class AnnouncementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  file_title: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: true })
  file_name: string;

  @Column({ nullable: false })
  announcement_type: number;

  @Column({ nullable: false })
  announcement_status: number;

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

