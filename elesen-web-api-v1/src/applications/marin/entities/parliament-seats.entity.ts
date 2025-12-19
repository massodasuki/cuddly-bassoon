import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('parliament_seats')
export class ParliamentSeatEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  parliament_id: string;

  @Column({ nullable: false })
  parliament_seat_code: string;

  @Column({ nullable: false })
  parliament_seat_name: string;

  @Column({ nullable: false })
  is_deleted: number;

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
