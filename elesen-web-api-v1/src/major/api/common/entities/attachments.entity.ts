import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('attachments')
export class Attachment {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  object_type: string;

  @Column({ type: 'char', length: 36, nullable: true })
  object_id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  slug: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  filename: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ext: string;

  @Column({ type: 'double', nullable: true })
  size: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  path: string;

  @Column({ type: 'char', length: 36, nullable: true })
  uploaded_by: string;

  @CreateDateColumn()
  uploaded_at: Date;
}