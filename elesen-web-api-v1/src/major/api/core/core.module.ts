// Core module for authentication and user management
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
// import { FcmModule } from '../fcm/fcm.module'; // Assuming it exists

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([]),
    AuthModule,
    UsersModule,
    // FcmModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    AuthModule,
    UsersModule,
    // FcmModule,
  ],
})
export class CoreModule {}