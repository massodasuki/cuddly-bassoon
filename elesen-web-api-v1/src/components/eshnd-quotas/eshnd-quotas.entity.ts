import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eshnd_quotas')
export class EshndQuotaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  phase: string;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  entity_id: string;

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

