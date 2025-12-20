import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_module')
export class UserModuleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  module_id: string;

}

