import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { ProfileUser } from './profile-user.entity';
import { Role } from './role.entity';
import { Entities } from './entities.entity';
import { ProfilePentadbirHartas } from 'src/vessels/entities/profile-pentadbir-hartas.entity';
import { Financial } from 'src/financial/entities/financial.entity';
import { FishingActivity } from 'src/fishing-activity/entities/fishing-activity.entity';
import { Pengkalan } from 'src/pengkalan/entities/pengkalan.entity';
import { Kesalahan } from 'src/vessels/entities/kesalahan.entity';
import { Vessels } from '../../vessels/entities/vessel.entity';
import { Jetty } from '../../jetties/jetty.entity';
import { DaratBaseJetty } from 'src/jetties/darat-base-jetties.entity';
import { FishingLog } from '../../fishing-activity/entities/fishing-log.entity';
@Entity('users')
export class  User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at: Date;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100, nullable: true })
  remember_token: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_admin: boolean;

  @Column({ length: 50 })
  user_type: string;

  @Column({ length: 255, nullable: true })
  profile_picture: string;

  @Column({ type: 'timestamp', nullable: true })
  last_online_at: Date;

  @Column({ length: 100, nullable: true })
  bumiputera_type: string;

  @Column({ length: 255, nullable: true })
  address1: string;

  @Column({ length: 255, nullable: true })
  address2: string;

  @Column({ length: 255, nullable: true })
  address3: string;

  @Column({ length: 10, nullable: true })
  postcode: string;

  @Column({ length: 100, nullable: true })
  district: string;

  @Column({ nullable: true })
  state_id: string;

  @Column({ length: 20, nullable: true })
  contact_number: string;

  @Column({ length: 20, nullable: true })
  mobile_contact_number: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Entities, { nullable: true })
  @JoinColumn({ name: 'entity_id' })
  entity: Entities;

  @Column({ nullable: true })
  position_id: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ length: 50, nullable: true })
  watikah_status: string;

  // extra

  @OneToOne(() => Vessels, vessel => vessel.user)
  vessel: Vessels;

  // @OneToOne(() => Financial, financial => financial.user)
  // financial: Financial;

  // @OneToMany(() => FishingActivity, fishingActivity => fishingActivity.user)
  // fishingActivity: FishingActivity;

  // @OneToMany(() => Pengkalan, pengkalan => pengkalan.user)
  // pengkalan: Pengkalan;

  @OneToOne(() => ProfileUser, profile => profile.user)
  profile: ProfileUser;

  // @OneToOne(() => ProfilePentadbirHartas, pentadbirHartas => pentadbirHartas.user)
  // pentadbirHartas: ProfilePentadbirHartas;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
    name: 'user_role',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];

  @ManyToMany(() => Kesalahan, kesalahan => kesalahan.users)
  @JoinTable({
    name: 'vessels',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'no_pendaftaran', referencedColumnName: 'no_pendaftaran' },
  })
  kesalahan: Kesalahan[];

  @OneToMany(() => DaratBaseJetty, dbj => dbj.user)
  darat_base_jetties: DaratBaseJetty;

  @ManyToMany(() => Jetty, jetty => jetty.users)
  @JoinTable({
    name: 'darat_base_jetties',
    joinColumn: { name: 'user_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'jetty_id', referencedColumnName: 'id' },
  })
  jetty: Jetty[];

  @OneToMany(() => FishingLog, fishing => fishing.user)
  fishing_log: FishingLog;
}

