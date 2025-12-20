import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pekelilings')
export class PekelilingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nama: string;

  @Column({ nullable: false })
  tajuk: string;

  @Column({ nullable: false })
  tarikh: Date;

  @Column({ nullable: false })
  no_rujukan: string;

  @Column({ nullable: false })
  kandungan: string;

  @Column({ nullable: true })
  bil: string;

  @Column({ nullable: true })
  file_title: string;

  @Column({ nullable: true })
  file_path: string;

  @Column({ nullable: true })
  file_name: string;

  @Column({ nullable: false })
  is_active: number;

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

