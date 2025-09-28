import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LpiForm } from './lpi-form.entity';

@Entity('lpi_form_images')
export class LpiFormImage {
   @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  filename: string;

  @Column()
  path: string;

  @ManyToOne(() => LpiForm, lpi => lpi.images)
  @JoinColumn({ name: 'lpi_form_id' })
  lpiForm: LpiForm;
}
