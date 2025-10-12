import { Module } from '@nestjs/common';
import { UserRoleEntityervice } from './user-role.service';
import { UserRoleEntityController } from './user-role.controller';
import { UserRoleEntity } from './user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  providers: [UserRoleEntityervice],
  controllers: [UserRoleEntityController],
  exports: [UserRoleEntityervice],
})
export class UserRoleModule {}
