import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Vessels } from './vessel.entity';
import { User } from 'src/users/entities/user.entity';
import { ProfileUser } from 'src/users/entities/profile-user.entity';

@Entity({ name: 'profile_pentadbir_hartas' })
export class ProfilePentadbirHartas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

//   @Column({ nullable: true })
//   user_id: number;
  // @OneToOne(() => User, user => user.pentadbirHartas)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  icno: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  vessel_owner_id: string;

  @OneToOne(() => ProfileUser, pu => pu.pentadbirHartas)
  @JoinColumn({ name: 'vessel_owner_id' })
  vesselOwner: ProfileUser;

  @Column({ nullable: true })
  pemilik_vesel: string;

  @Column({ nullable: true })
  status_pengguna: string;

  @Column({ nullable: true })
  hubungan: string;

  @Column({ nullable: true })
  no_vesel: string;

  @Column({ nullable: true })
  surat_pelantikan_pentadbir: string;

  @Column({ nullable: true })
  dokumen_sokongan_1: string;

  @Column({ nullable: true })
  dokumen_sokongan_2: string;

  @Column({ nullable: true })
  dokumen_sokongan_3: string;

  @Column({ nullable: true })
  dokumen_sokongan_4: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  created_by: string;

  @Column({ nullable: true })
  updated_by: string;

  @Column({ nullable: true })
  deleted_by: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

 @OneToOne(() => Vessels, v => v.pentadbirHartas)
 @JoinColumn({ name: 'vessel_id' })
 vessel: Vessels;
}