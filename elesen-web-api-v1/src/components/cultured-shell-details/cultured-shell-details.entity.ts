import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cultured_shell_details')
export class CulturedShellDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  cultured_shells_id: string;

  @Column({ nullable: false })
  item_id: string;

  @Column({ nullable: false })
  payment_amount: number;

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

