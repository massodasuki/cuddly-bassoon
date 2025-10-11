import { Column } from 'typeorm';

export class MaklumatAm {
  @Column({ nullable: true })
  email: string;

  @Column({ name: 'contact_number', nullable: true })
  contactNumber: string;

  @Column({ nullable: true })
  religion: string;

  @Column({ name: 'bumiputera_type', nullable: true })
  bumiputeraType: string;

  @Column({ name: 'is_oku', type: 'boolean', default: false })
  isOKU: boolean;

  @Column({ nullable: true })
  dun: string;

  @Column({ nullable: true })
  parlimen: string;
}