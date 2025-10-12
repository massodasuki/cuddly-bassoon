import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role_module')
export class RoleModuleEntity {
  @Column({ nullable: false })
  role_id: string;

  @Column({ nullable: false })
  module_id: string;

}
