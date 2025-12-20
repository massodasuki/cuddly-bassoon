import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleEntityController } from './user-role.controller';
import { UserRoleEntity } from './user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  providers: [UserRoleService],
  controllers: [UserRoleEntityController],
  exports: [UserRoleService],
})
export class UserRoleModule {}

