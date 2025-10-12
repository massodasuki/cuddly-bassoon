import { ModuleService } from './modules.service';
import { ModuleEntitysController } from './modules.controller';
import { ModuleEntity } from './modules.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleEntity])],
  providers: [ModuleService],
  controllers: [ModuleEntitysController],
  exports: [ModuleService],
})
export class ModulesModule {}
