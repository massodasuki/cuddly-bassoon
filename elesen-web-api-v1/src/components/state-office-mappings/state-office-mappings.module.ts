import { Module } from '@nestjs/common';
import { StateOfficeMappingService } from './state-office-mappings.service';
import { StateOfficeMappingEntityController } from './state-office-mappings.controller';
import { StateOfficeMappingEntity } from './state-office-mappings.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StateOfficeMappingEntity])],
  providers: [StateOfficeMappingService],
  controllers: [StateOfficeMappingEntityController],
  exports: [StateOfficeMappingService],
})
export class StateOfficeMappingModule {}

