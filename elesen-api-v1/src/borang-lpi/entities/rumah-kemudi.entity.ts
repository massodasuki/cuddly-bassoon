import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rumah_kemudi')
export class RumahKemudi {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  diCat: boolean;

  @Column()
  kodZon: string;

  @Column()
  diBumbung: boolean;
}