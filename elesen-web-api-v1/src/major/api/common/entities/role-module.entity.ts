import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('role_module')
export class RoleModuleEntity {
  @PrimaryColumn({ nullable: false })
  role_id: string;

  @PrimaryColumn({ nullable: false })
  module_id: string;

}
