// Profiles module group for profile-related functionality
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../common/common.module';
import { ProfileUserDetailsModule } from '../profile-user-details/profile-user-details.module';

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