import { Module } from '@nestjs/common';
import { UserModuleService } from './user-module.service';
import { UserModuleEntityController } from './user-module.controller';
import { UserModuleEntity } from './user-module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserModuleEntity])],
  providers: [UserModuleService],
  controllers: [UserModuleEntityController],
  exports: [UserModuleService],
})
export class UserModuleModule {}

