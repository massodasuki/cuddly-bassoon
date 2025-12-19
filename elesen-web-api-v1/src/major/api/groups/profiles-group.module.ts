// Profiles module group for profile-related functionality
import { Module } from '@nestjs/common';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([]),
    ProfileUserDetailsModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    ProfileUserDetailsModule,
  ],
})
export class ProfilesGroupModule {}