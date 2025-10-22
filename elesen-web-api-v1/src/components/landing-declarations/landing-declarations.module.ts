import { Module } from '@nestjs/common';
import { LandingDeclarationService } from './landing-declarations.service';
import { LandingDeclarationEntityController } from './landing-declarations.controller';
import { LandingDeclarationEntity } from './landing-declarations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingDeclarationEntity])],
  providers: [LandingDeclarationService],
  controllers: [LandingDeclarationEntityController],
  exports: [LandingDeclarationService],
})
export class LandingDeclarationModule {}
