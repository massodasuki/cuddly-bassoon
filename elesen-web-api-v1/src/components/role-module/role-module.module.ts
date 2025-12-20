import { Module } from '@nestjs/common';
import { RoleModuleEntityervice } from './role-module.service';
import { RoleModuleEntityController } from './role-module.controller';
import { RoleModuleEntity } from './role-module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleModuleEntity])],
  providers: [RoleModuleEntityervice],
  controllers: [RoleModuleEntityController],
  exports: [RoleModuleEntityervice],
})
export class RoleModuleModule {}

