import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lesen')
export class Lesen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'no_lesen' })
  noLesen: string;

  @Column({ name: 'tarikh_mula', type: 'date' })
  tarikhMula: string;

  @Column({ name: 'tarikh_tamat', type: 'date' })
  tarikhTamat: string;

  @Column()
  zon: string;

  @Column({ name: 'no_patil' })
  noPatil: string;

  @Column()
  status: string;

  @Column({ name: 'status_iuuu' })
  statusIUUU: string;
}