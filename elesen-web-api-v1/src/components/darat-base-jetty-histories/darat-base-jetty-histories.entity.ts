import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('darat_base_jetty_histories')
export class DaratBaseJettyHistorieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  jetty_base_id: string;

  @Column({ nullable: true })
  jetty_id: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ nullable: true })
  district_id: string;

  @Column({ nullable: true })
  river_id: string;

  @Column({ nullable: true })
  is_active: number;

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

