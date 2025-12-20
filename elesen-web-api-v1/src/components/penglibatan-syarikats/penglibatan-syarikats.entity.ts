import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('penglibatan_syarikats')
export class PenglibatanSyarikatEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  company_id: string;

  @Column({ nullable: true })
  bil_vesel: string;

  @Column({ nullable: true })
  jenis_industri: string;

  @Column({ nullable: true })
  industri_lain: string;

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

}

