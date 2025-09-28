import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { CodeMaster } from './code-master.entity';
import { profile } from 'console';
import { ProfilePentadbirHartas } from 'src/vessels/entities/profile-pentadbir-hartas.entity';

@Entity('profile_users')
export class ProfileUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'gender_id' })
  gender: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'religion_id' })
  religion: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'race_id' })
  race: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'marital_status_id' })
  marital_status: CodeMaster;

  @ManyToOne(() => CodeMaster)
  @JoinColumn({ name: 'type_id' })
  type: CodeMaster;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @OneToOne(() => ProfilePentadbirHartas, pentadbirHartas => pentadbirHartas.vesselOwner, { cascade: true })
  pentadbirHartas: ProfilePentadbirHartas;
}
