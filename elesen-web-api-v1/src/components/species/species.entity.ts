import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('species')
export class SpecieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  common_name: string;

  @Column({ nullable: true })
  scientific_name: string;

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

  @Column({ nullable: true })
  family_name: string;

  @Column({ nullable: true })
  order_name: string;

}
