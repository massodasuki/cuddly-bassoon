import { Column } from 'typeorm';

export class MaklumatBank {
  @Column({ nullable: true })
  nama: string;

  @Column({ nullable: true })
  cawangan: string;

  @Column({ name: 'no_akaun', type: 'bigint', nullable: true })
  noAkaun: number;
}