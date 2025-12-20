import { Module } from '@nestjs/common';
import { LandingDeclarationMonthlieService } from './landing-declaration-monthlies.service';
import { LandingDeclarationMonthlieEntityController } from './landing-declaration-monthlies.controller';
import { LandingDeclarationMonthlieEntity } from './landing-declaration-monthlies.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingDeclarationMonthlieEntity])],
  providers: [LandingDeclarationMonthlieService],
  controllers: [LandingDeclarationMonthlieEntityController],
  exports: [LandingDeclarationMonthlieService],
})
export class LandingDeclarationMonthlieModule {}

