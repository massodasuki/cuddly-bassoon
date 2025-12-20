import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('application_v2_profile_user')
export class ApplicationV2ProfileUser {
  @PrimaryColumn({ type: 'char', length: 36 })
  application_id: string;

  @PrimaryColumn({ type: 'char', length: 36 })
  profile_user_id: string;
}
