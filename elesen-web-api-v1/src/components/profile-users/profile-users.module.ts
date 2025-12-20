import { Module } from '@nestjs/common';
import { ProfileUserService } from './profile-users.service';
import { ProfileUserEntityController } from './profile-users.controller';
import { ProfileUserEntity } from './profile-users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileUserEntity])],
  providers: [ProfileUserService],
  controllers: [ProfileUserEntityController],
  exports: [ProfileUserService],
})
export class ProfileUserModule {}

