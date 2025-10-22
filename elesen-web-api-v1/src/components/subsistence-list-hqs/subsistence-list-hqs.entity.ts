import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsistence_list_hqs')
export class SubsistenceListHqEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: false })
  generated_date: Date;

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
