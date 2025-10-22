import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('modules_20250312')
export class Modules_20250312Entity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  parent_id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  name_eng: string;

  @Column({ nullable: false })
  slug: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  icon: string;

  @Column({ nullable: false })
  order: number;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: false })
  is_menu: number;

  @Column({ nullable: false })
  is_parent_menu: number;

  @Column({ nullable: false })
  created_by: string;

  @Column({ nullable: false })
  created_at: Date;

}
