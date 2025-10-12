import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('password_resets')
export class PasswordResetEntity {
  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  token: string;

  @Column({ nullable: true })
  created_at: Date;

}
