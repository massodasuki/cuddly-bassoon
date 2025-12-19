import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cultured_shell_histories')
export class CulturedShellHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  cultured_shells_id: string;

  @Column({ nullable: false })
  status_id: string;

  @Column({ nullable: true })
  review: string;

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
