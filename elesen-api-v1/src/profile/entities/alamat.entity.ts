import { Column } from 'typeorm';

export class Alamat {
  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: true })
  address3: string;

  @Column({ type: 'int', nullable: true })
  postcode: number;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  state: string;
}