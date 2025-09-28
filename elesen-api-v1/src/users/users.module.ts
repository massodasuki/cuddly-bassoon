// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Entities } from './entities/entities.entity';
import { ProfileUser } from './entities/profile-user.entity';
// import { CodeMaster } from './entities/code-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Entities, ProfileUser])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
