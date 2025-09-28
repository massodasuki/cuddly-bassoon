import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('pengkalan')
export class Pengkalan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'varchar', length: 150, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  district: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  license_no: string;

  @Column({ type: 'date', nullable: true })
  license_expiry: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  main_equipment: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  additional_equipment: string;

}