import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditsService } from './audits.service';
import { AuditsController } from './audits.controller';
import { Audit } from './audits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Audit])],
  controllers: [AuditsController],
  providers: [AuditsService],
})
export class AuditsModule {}
