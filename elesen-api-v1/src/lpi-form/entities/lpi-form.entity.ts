import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { LpiFormImage } from './lpi-form-image.entity';
import { Vessels } from 'src/vessels/entities/vessel.entity';
import { VesselInspection } from '../../shared/entities/vessel-inspection.entity';

@Entity('lpi_forms')
export class LpiForm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user: string;

  @OneToMany(() => LpiFormImage, img => img.lpiForm, { cascade: true })
  images: LpiFormImage[];

  @OneToOne(() => VesselInspection, vi => vi.lpiForm, { cascade: true })
  vesselInspection: VesselInspection;

  @OneToOne(() => Vessels, v => v.id, { cascade: true })
  vessels: Vessels;

  @CreateDateColumn()
  createdAt: Date;
}
