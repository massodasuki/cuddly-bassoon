import { Module } from '@nestjs/common';
import { PpPvpApplicationDetailsService } from './pp_pvp_application_details.service';
import { PpPvpApplicationDetailsController } from './pp_pvp_application_details.controller';
import { PpPvpApplicationDetailsEntity } from './pp_pvp_application_details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPvpApplicationDetailsEntity])],
  providers: [PpPvpApplicationDetailsService],
  controllers: [PpPvpApplicationDetailsController],
  exports: [PpPvpApplicationDetailsService],
})
export class PpPvpApplicationDetailsModule {}