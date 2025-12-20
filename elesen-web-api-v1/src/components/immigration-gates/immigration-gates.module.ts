import { Module } from '@nestjs/common';
import { ImmigrationGateService } from './immigration-gates.service';
import { ImmigrationGateEntityController } from './immigration-gates.controller';
import { ImmigrationGateEntity } from './immigration-gates.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ImmigrationGateEntity])],
  providers: [ImmigrationGateService],
  controllers: [ImmigrationGateEntityController],
  exports: [ImmigrationGateService],
})
export class ImmigrationGateModule {}

