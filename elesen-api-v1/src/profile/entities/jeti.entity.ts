import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('jeti')
export class Jeti {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  kawasan: string;
}