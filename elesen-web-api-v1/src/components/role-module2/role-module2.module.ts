import { Module } from '@nestjs/common';
import { RoleModule2Service } from './role-module2.service';
import { RoleModule2Controller } from './role-module2.controller';
import { RoleModule2Entity } from './role-module2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleModule2Entity])],
  providers: [RoleModule2Service],
  controllers: [RoleModule2Controller],
  exports: [RoleModule2Service],
})
export class RoleModule2Module {}