import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('muatan')
export class MuatanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  kulit_id: string;

  @Column({ nullable: false })
  gt_1: string;

  @Column({ nullable: false })
  gt_2: string;

  @Column({ nullable: false })
  grt_1: string;

  @Column({ nullable: false })
  grt_2: string;

  @Column({ nullable: false })
  is_active: number;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

  @Column({ nullable: true })
  tot_grt: string;

}

