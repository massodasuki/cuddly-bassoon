import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('applications_v2')
export class ApplicationsV2Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ref', type: 'varchar', length: 255, nullable: true })
  ref: string;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ name: 'type', type: 'varchar', length: 255, nullable: true })
  type: string;

  @Column({ name: 'status', type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ name: 'entity_id', type: 'int', nullable: true })
  entityId: number;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  // Relations will be added after all entities are created
}