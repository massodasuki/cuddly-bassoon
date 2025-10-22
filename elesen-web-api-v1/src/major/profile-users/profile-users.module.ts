import { Module } from '@nestjs/common';
import { ProfileUserService } from './profile-users.service';
import { ProfileUserController } from './profile-users.controller';
import { ProfileUser } from './profile-users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileUser])],
  providers: [ProfileUserService],
  controllers: [ProfileUserController],
  exports: [ProfileUserService],
})
export class ProfileUserModule {}