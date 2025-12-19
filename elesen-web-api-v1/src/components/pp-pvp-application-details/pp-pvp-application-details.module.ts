import { Module } from '@nestjs/common';
import { PpPvpApplicationDetailsService } from './pp-pvp-application-details.service';
import { PpPvpApplicationDetailsController } from './pp-pvp-application-details.controller';
import { PpPvpApplicationDetailsEntity } from './pp-pvp-application-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPvpApplicationDetailsEntity])],
  providers: [PpPvpApplicationDetailsService],
  controllers: [PpPvpApplicationDetailsController],
  exports: [PpPvpApplicationDetailsService],
})
export class PpPvpApplicationDetailsModule {}