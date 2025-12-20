import { Module } from '@nestjs/common';
import { LandingDeclarationLogService } from './landing-declaration-logs.service';
import { LandingDeclarationLogEntityController } from './landing-declaration-logs.controller';
import { LandingDeclarationLogEntity } from './landing-declaration-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingDeclarationLogEntity])],
  providers: [LandingDeclarationLogService],
  controllers: [LandingDeclarationLogEntityController],
  exports: [LandingDeclarationLogService],
})
export class LandingDeclarationLogModule {}

