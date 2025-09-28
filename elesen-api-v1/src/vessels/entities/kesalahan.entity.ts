import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Vessels } from './vessel.entity'; // Adjust path as needed
import { User } from 'src/users/entities/user.entity';

@Entity('kesalahan')
export class Kesalahan {
   @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  no_pendaftaran: string;

  @ManyToOne(() => Vessels, { nullable: true })
  @JoinColumn({ name: 'no_pendaftaran' })
  vessel: Vessels;

  @Column({ type: 'varchar', length: 255 })
  pesalah: string;

  @Column({ type: 'varchar', length: 255 })
  no_ic_pesalah: string;

  @Column({ type: 'varchar', length: 255 })
  akta: string;

  @Column({ type: 'varchar', length: 255 })
  seksyen: string;

  @Column({ type: 'varchar', length: 255 })
  kesalahan: string;

  @Column({ type: 'date' })
  tarikh: Date;

  @Column({ type: 'varchar', length: 255 })
  keputusan: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @ManyToMany(() => User, user => user.kesalahan)
  users: User[];
}

