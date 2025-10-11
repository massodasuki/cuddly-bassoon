import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maklumat_bank')
export class MaklumatBank {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  nama: string;

  @Column({ nullable: true })
  cawangan: string;

  @Column({ name: 'no_akaun', type: 'bigint', nullable: true })
  noAkaun: number;
}