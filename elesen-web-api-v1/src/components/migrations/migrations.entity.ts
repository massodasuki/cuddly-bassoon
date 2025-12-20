import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('migrations')
export class MigrationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  migration: string;

  @Column({ nullable: false })
  batch: number;

}

