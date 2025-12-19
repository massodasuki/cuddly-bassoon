import { Module } from '@nestjs/common';
import { RoleService } from './roles.service';
import { RoleEntityController } from './roles.controller';
import { RoleEntity } from './roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  providers: [RoleService],
  controllers: [RoleEntityController],
  exports: [RoleService],
})
export class RoleModule {}
