import { Module } from '@nestjs/common';
import { UserRole2Service } from './user_role2.service';
import { UserRole2Controller } from './user_role2.controller';
import { UserRole2Entity } from './user_role2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole2Entity])],
  providers: [UserRole2Service],
  controllers: [UserRole2Controller],
  exports: [UserRole2Service],
})
export class UserRole2Module {}