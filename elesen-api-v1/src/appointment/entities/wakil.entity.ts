import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wakil')
export class Wakil {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama: string;

  @Column()
  noKadPengenalan: string;

  @Column({ nullable: true })
  suratWakilImg: string;
}