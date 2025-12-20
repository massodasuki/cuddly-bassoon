import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal_access_tokens')
export class PersonalAccessTokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  tokenable_type: string;

  @Column({ nullable: false })
  tokenable_id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  token: string;

  @Column({ nullable: true })
  abilities: string;

  @Column({ nullable: true })
  last_used_at: Date;

  @Column({ nullable: true })
  expires_at: Date;

  @Column({ nullable: true })
  created_at: Date;

  @Column({ nullable: true })
  updated_at: Date;

}

