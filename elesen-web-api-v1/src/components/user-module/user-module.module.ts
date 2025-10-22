import { Module } from '@nestjs/common';
import { UserModuleEntityervice } from './user-module.service';
import { UserModuleEntityController } from './user-module.controller';
import { UserModuleEntity } from './user-module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserModuleEntity])],
  providers: [UserModuleEntityervice],
  controllers: [UserModuleEntityController],
  exports: [UserModuleEntityervice],
})
export class UserModuleModule {}
