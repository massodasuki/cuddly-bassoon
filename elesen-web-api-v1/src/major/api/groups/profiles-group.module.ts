// Profiles module group for profile-related functionality
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileUserDetailsModule } from '../profile-user-details/profile-user-details.module';
import { CommonModule } from '../common/common.module';

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