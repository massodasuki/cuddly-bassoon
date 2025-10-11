import { Entities } from 'src/users/entities/entities.entity';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { ProfilePentadbirHartas } from './profile-pentadbir-hartas.entity';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';
import { User } from "../../users/entities/user.entity";
@Entity('vessels')
export class Vessels {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Entities, { nullable: true })
  @JoinColumn({ name: 'entity_id' })
  entity: Entities;

  @Column({ name: 'vessel_no', unique: true })
  vesselNo: string;

  @Column()
  zone: string;

  @Column({ type: 'date', nullable: true, name: 'start_date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true, name: 'end_date' })
  endDate: Date;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @Column({ nullable: true, name: 'created_by' })
  createdBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date;

  @Column({ nullable: true, name: 'updated_by' })
  updatedBy: number;

  @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: true, name: 'deleted_by' })
  deletedBy: number;

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deletedAt: Date;

  @OneToOne(() => ProfilePentadbirHartas, pentadbirHartas => pentadbirHartas.vessel, { cascade: true })
  pentadbirHartas: ProfilePentadbirHartas;


  @OneToOne(() => VesselInspection, vi => vi.vessel)
  pemeriksaanVesel: VesselInspection;

}
